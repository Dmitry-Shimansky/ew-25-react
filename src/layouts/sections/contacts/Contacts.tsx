import {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
import {Theme} from "../../../styles/Theme.ts";
// import {toast} from "react-toastify";

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

    const sendEmail = async (e: any) => {
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

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                // const result = await response.json();
                // console.log('SUCCESS!', result);
                // toast.success(`Message was sent successfully !`);
                e.target.reset();
            }
        } catch (error) {
            console.error("FAILED...", error);
            // toast.error(`Message was NOT sent. Please try again.`);
        }
    };

    return (
        <S.StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>Контакты</SectionTitle>
                <SectionDescription>Остались вопросы ?<br/> Будем рады на них ответить!</SectionDescription>
                <S.ContactsWrapper >
                    <S.ContactsInfoWrapper>
                        <S.EmailWrapper>
                            <Icon iconId={'phone'} width={'29px'} height={'26px'} fill={Theme.colors.accent}/>
                            <S.Phone href={'tel:+79605557788'}>+7 (960) 555-77-88</S.Phone>
                        </S.EmailWrapper>
                        <S.EmailWrapper>
                            <Icon iconId={'email'} width={'29px'} height={'26px'} fill={Theme.colors.accent}/>
                            <S.Email href={'mailto:gusi.Lebedi@gmail.com'}>gusi.Lebedi@gmail.com</S.Email>
                        </S.EmailWrapper>
                        <S.EmailWrapper>
                            <Icon iconId={'working-hours'} width={'29px'} height={'26px'} fill={Theme.colors.accent}/>
                            <S.WorkingHours>Пн.-Пт: 8:00 - 20:00 Сб: 10:00 - 18:00</S.WorkingHours>
                        </S.EmailWrapper>
                    </S.ContactsInfoWrapper>
                    <S.StyledForm ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'Имя'} name={'user_name'}/>
                        <S.Field required placeholder={'email'} name={'user_email'}/>
                        <S.Field required placeholder={'телефон'} name={'user_phone'}/>
                        <S.Field placeholder={'Сообшение'} as={"textarea"} name={'message'}/>
                        <Button type={'submit'}>Отправить</Button>
                    </S.StyledForm>
                </S.ContactsWrapper>
            </Container>
        </S.StyledContacts>
    );
};

