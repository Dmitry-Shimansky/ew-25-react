import React from 'react';
import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container.ts";
import main from '../../../assets/images/main.jpg';
import {Button} from "../../../components/Button.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainWrapper>
                    <MainTitle>
                        Запасные части и комплектующие для экскаваторной техники EW-25-M1 (Антей) и EC-22-K2 (Гидра)
                    </MainTitle>
                    <ButtonWrapper>
                        <Button>Оставить заявку</Button>
                        <Button>Каталог</Button>
                    </ButtonWrapper>
                </MainWrapper>
            </Container>
        </StyledMain>
    );
};

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
    
`;

const MainTitle = styled.h1`
    position: relative;
    font-size: 42px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    color: ${Theme.colors.mainTitle};
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 50px;
`;