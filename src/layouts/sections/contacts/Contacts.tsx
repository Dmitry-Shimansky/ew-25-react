import {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
// import emailjs from "@emailjs/browser";
// import {toast} from "react-toastify";

// const escapeHtml = (text: string) => {
//     const map: any = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         "'": '&#039;'
//     };
//
//     return text.replace(/[&<>"']/g, (m)=> map[m]);
// }

const token = "";
const chatId = "";

export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());
        console.log('Form submitted with:', data);

        try {
            fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${data.user_name}`)
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.json());
                        // toast.success(`Message was sent successfully !`);
                        e.target.reset();
                    },
                );
        } catch (error) {
            console.log('FAILED...');
            // toast.error(`Message was NOT sent. Please try again.`);
            // throw new Error(error.message);
        }

        // emailjs
        //     .sendForm('service_1n4hv6s', 'template_am47jhn', form.current, {
        //         publicKey: '-aWeFRbWUAhKJr4lq',
        //     })
        //     .then(
        //         () => {
        //             console.log('SUCCESS!');
        //             toast.success(`Message was sent successfully !`);
        //             e.target.reset();
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //             toast.error(`Message was NOT sent. Please try again.`);
        //         },
        //     );
    };

    return (
        <S.StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>Контакты</SectionTitle>
                <SectionDescription>Остались вопросы ?<br/> Будем рады на них ответить!</SectionDescription>
                <S.ContactsWrapper >
                    <S.ContactsInfoWrapper>
                        <S.EmailWrapper>
                            <Icon iconId={'phone'} width={'29px'} height={'26px'} fill={'#000'}/>
                            <S.Phone href={'tel:+79605557788'}>+7 (960) 555-77-88</S.Phone>
                        </S.EmailWrapper>
                        <S.EmailWrapper>
                            <Icon iconId={'email'} width={'29px'} height={'26px'} fill={'#000'}/>
                            <S.Email href={'mailto:gusi.Lebedi@gmail.com'}>gusi.Lebedi@gmail.com</S.Email>
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

