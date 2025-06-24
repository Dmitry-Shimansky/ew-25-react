// import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {footerSocialIcons} from "../../components/data";
import {S} from "./Footer_Styles";

export const Footer = () => {
    return (
        <S.StyledFooter>
            <Container>
                <S.FooterTopWrapper>
                    <S.SocialIconsList>
                        {footerSocialIcons.map(item => {
                            return (
                                <S.SocialIconItem>
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
                        Designed and made by Love & Coffee
                    </S.MadeBy>
                </S.FooterBottomWrapper>
            </Container>
        </S.StyledFooter>
    );
};

