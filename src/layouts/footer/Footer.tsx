import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {footerSocialIcons} from "../../components/data";
import {S} from "./Footer_Styles";
import {Theme} from "../../styles/Theme.ts";
import {v4 as uuid} from "uuid";

export const Footer = () => {
    return (
        <S.StyledFooter>
            <Container>
                <S.FooterTopWrapper>
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
                    <S.SocialIconsList>
                        {footerSocialIcons.map(item => {
                            return (
                                <S.SocialIconItem key={uuid()}>
                                    <S.SocialIconLink>
                                        <Icon iconId={item} width={'30px'} height={'30px'}/>
                                    </S.SocialIconLink>
                                </S.SocialIconItem>
                            )
                        })}
                    </S.SocialIconsList>
                </S.FooterTopWrapper>
                <S.FooterBottomWrapper>
                    <S.Copyright>
                        © 2025 All rights reserved.
                    </S.Copyright>
                    <S.MadeBy>
                        Designed and made by Love & Coffee. Powered by – Vite, React
                    </S.MadeBy>
                </S.FooterBottomWrapper>
            </Container>
        </S.StyledFooter>
    );
};

