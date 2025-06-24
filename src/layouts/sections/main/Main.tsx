import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container.ts";
import main from '../../../assets/images/main.jpg';
import {Button} from "react-scroll"

export const Main = () => {
    return (
        <StyledMain id={"home"}>
            <Container>
                <MainWrapper>
                    <MainTitle>
                        Запасные части и комплектующие для экскаваторной техники <br/> <span>EW-25-M1 (Антей)</span> и <span>EC-22-K2 (Гидра)</span>
                    </MainTitle>
                    <ButtonWrapper>
                        <ButtonMain
                            to={"contacts"}
                            smooth={true}
                            activeClass="active"
                            spy={true}
                        >Оставить заявку</ButtonMain>
                        <ButtonMain
                            to={"catalog"}
                            smooth={true}
                            activeClass="active"
                            spy={true}
                        >Каталог</ButtonMain>
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
    font-family: 'Exo 2', sans-serif;
    font-size: 42px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    color: ${Theme.colors.mainTitle};
    
    span:last-child {
        color: dodgerblue;
    }
    
    span:nth-child(2) {
        color: ${Theme.colors.accent};
    }
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 50px;
`;

const ButtonMain = styled(Button)`
    position: relative;
    width: 152px;
    height: 53px;
    color: rgb(255, 255, 255);
    background-color: ${Theme.colors.accent};
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0;
    
    &:active {
        transform: scale(0.98);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
`;