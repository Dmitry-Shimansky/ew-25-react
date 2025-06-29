import styled from "styled-components";
import main from "../../../assets/images/main.jpg";
import {Theme} from "../../../styles/Theme.ts";
import {Button} from "react-scroll";

const StyledMain = styled.section`
    position: relative;
    background-image: url(${main});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 50vh;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgb(0, 0, 0, 0.65);
    }
    
    & > div {
      height: 100%;  
    }
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 100%;

    @media screen and (max-width: 650px) {
        gap: 40px;
    }

    @media screen and (max-width: 450px) {
        gap: 40px;
    }
    
`;

const MainTitle = styled.h1`
    position: relative;
    font-family: 'Oswald', sans-serif;
    font-size: 42px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    color: ${Theme.colors.mainTitle};
    z-index: 1;
    
    span:last-child {
        color: dodgerblue;
    }
    
    span:nth-child(2) {
        color: ${Theme.colors.accent};
    }

    @media ${Theme.media.tablet860} {
        font-weight: 500;
    }

    @media screen and (max-width: 550px) {
        font-weight: 400;
    }

    @media screen and (max-width: 450px) {
        font-size: 38px;
        font-weight: 400;
    }

    &::before {
        position: absolute;
        content: "";
        top: -10px;
        left: -10px;
        bottom: -10px;
        right: -10px;
        background-color: rgb(0, 0, 0, 0.5);
        border-radius: 30px;
        box-shadow: 0 0 40px rgb(0, 0, 0, 1);
        z-index: -1;

        @media screen and (max-width: 1300px) {
            left: 10px;
            right: 10px;
        }

        @media ${Theme.media.tablet860} {
            left: 0;
            right: 0;
        }
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;

    @media screen and (max-width: 450px) {
        gap: 20px;
    }
`;

const ButtonMain = styled(Button)`
    position: relative;
    width: 180px;
    height: 53px;
    color: rgb(255, 255, 255);
    background-color: ${Theme.colors.accent};
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0;
    transition: 0.3s;
    
    &:active {
        transform: scale(0.98);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    &:hover {
        box-shadow: 0 0 10px dodgerblue, 0 0 20px dodgerblue;
        text-shadow: 0 0 5px white;
    }
`;

export const S = {
    StyledMain,
    MainWrapper,
    MainTitle,
    ButtonWrapper,
    ButtonMain
}