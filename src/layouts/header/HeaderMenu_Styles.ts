import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Link} from "react-scroll";

const StyledHeader = styled.header`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: transparent;

        @media ${Theme.media.mobile} {
                display: none;
        }
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    border-bottom: 2px solid ${Theme.colors.accent};
`;

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
    font-family: 'Oswald', sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0;

    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        background: dodgerblue;
        
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
            text-shadow: 0 0 5px white;
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

export const S = {
        StyledHeader,
        HeaderWrapper,
        StyledNav,
        List,
        Mask,
        ListItem,
        NavLink
}