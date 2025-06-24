import styled from "styled-components";
import {v4 as uuid} from 'uuid';
import {headerMenuItems} from "../../../components/data"
import {Theme} from "../../../styles/Theme";
import {Link} from "react-scroll"
import {useEffect, useState} from "react";

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
        <StyledNav className={isScrolled ? 'scrolled' : ''}>
            <List>
                {headerMenuItems.map((item) => {
                    return (
                        <ListItem key={uuid()}>
                            <NavLink
                                to={item.href}
                                smooth={true}
                                activeClass="active"
                                spy={true}
                            >
                                <Mask>{item.title}</Mask>
                            </NavLink>
                        </ListItem>
                    )
                })}
            </List>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 51px;
    height: 100%;
    width: 100%;
    transition: backdrop-filter 0.5s ease;

    &.scrolled {
        backdrop-filter: blur(10px);
        //background-color: rgba(255, 255, 255, 0.8);
        -webkit-backdrop-filter: blur(10px);
    }

    @media ${Theme.media.desktop1100} {
        justify-content: space-between;
    }

    @media ${Theme.media.mobile} {
        display: none;
    }
`;

const List = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 67px;
    height: 100%;

    @media ${Theme.media.desktop1100} {
        justify-content: space-between;
        flex-grow: 1;
        gap: 0;
    }
`;

const Mask = styled.span`
    position: relative;
    //outline: 1px solid red;
    color: dodgerblue;
    transition: 0.2s ease;
`;

const ListItem = styled.li`
    position: relative;
`;

const NavLink = styled(Link)`
    color: transparent;
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0;

    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        background: black;
        
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        
        transform: scale(0);
        transition: ${Theme.animations.transition};
    }

    &:hover {
        ${Mask} {
            color: ${Theme.colors.accent};
        }
    }

    &.active {
        &::before {
            transform: scale(1);
        }
        ${Mask} {
            color: ${Theme.colors.accent};
        }
    }
`;
