import {Container} from "../../../components/Container.ts";
import {S} from "./Main_Styles.ts"

export const Main = () => {
    return (
        <S.StyledMain id={"home"}>
            <Container>
                <S.MainWrapper>
                    <S.MainTitle>
                        Запасные части и комплектующие для экскаваторной техники <br/> <span>EW-25-M1 (Антей)</span> и <span>EC-22-K2 (Гидра)</span>
                    </S.MainTitle>
                    <S.ButtonWrapper>
                        <S.ButtonMain
                            to={"contacts"}
                            smooth={true}
                            activeClass="active"
                            spy={true}
                        >Оставить заявку</S.ButtonMain>
                        <S.ButtonMain
                            to={"catalog"}
                            smooth={true}
                            activeClass="active"
                            spy={true}
                        >Каталог</S.ButtonMain>
                    </S.ButtonWrapper>
                </S.MainWrapper>
            </Container>
        </S.StyledMain>
    );
};