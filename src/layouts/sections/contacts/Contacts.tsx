import {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
import {toast} from "react-toastify";

const escapeHtml = (text: string) => {
    const map: any = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (m)=> map[m]);
}

const baseURL = import.meta.env.VITE_BASE_URL;
const token = import.meta.env.VITE_AUTH_TOKEN;
const chatId = import.meta.env.VITE_CHAT_ID;

export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendMessage = async (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        const clientData = `
            Клиент: <b>${escapeHtml(data.user_name as string)}</b>
            Email: <b>${escapeHtml(data.user_email as string)}</b>
            Телефон: <b>${escapeHtml(data.user_phone as string)}</b>
            Сообщение: <b>${escapeHtml(data.message as string)}</b>
        `.trim().replace(/[ \t]+/g, ' ');

        try {
            const response = await fetch(`${baseURL}/bot${token}/sendMessage`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: clientData,
                    parse_mode: "HTML",
                }),
            });

            // const result = await response.json();
            // console.log('SUCCESS!', result);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                toast.success(`Заявка отправлена !`);
                e.target.reset();
            }
        } catch (error) {
            console.error("FAILED...", error);
            toast.error(`Заявка не отправлена. Попробуйте еще раз`);
        }
    };

    return (
        <S.StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>Контакты</SectionTitle>
                <SectionDescription>Остались вопросы ?<br/> Будем рады на них ответить!</SectionDescription>
                <S.ContactsWrapper >
                    <S.StyledForm ref={form} onSubmit={sendMessage}>
                        <S.Field required placeholder={'имя'} name={'user_name'} maxLength={40}/>
                        <S.Field required placeholder={'email'} name={'user_email'} maxLength={40} autoComplete={'off'}/>
                        <S.Field required placeholder={'телефон'} name={'user_phone'} maxLength={20}/>
                        <S.Field placeholder={'Сообшение'} as={"textarea"} name={'message'} maxLength={1000}/>
                        <Button type={'submit'}>Отправить</Button>
                    </S.StyledForm>
                </S.ContactsWrapper>
            </Container>
        </S.StyledContacts>
    );
};

