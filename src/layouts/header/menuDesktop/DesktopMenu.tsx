import {v4 as uuid} from 'uuid';
import {headerMenuItems} from "../../../components/data"
import {useEffect, useState} from "react";
import {S} from "../HeaderMenu_Styles.ts"

export const HeaderMenu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <S.StyledNav className={isScrolled ? 'scrolled' : ''}>
            <S.List>
                {headerMenuItems.map((item) => {
                    return (
                        <S.ListItem key={uuid()}>
                            <S.NavLink
                                to={item.href}
                                smooth={true}
                                activeClass="active"
                                spy={true}
                            >
                                <S.Mask>{item.title}</S.Mask>
                            </S.NavLink>
                        </S.ListItem>
                    )
                })}
            </S.List>
        </S.StyledNav>
    );
};
