import {Container} from "../../components/Container";
import {HeaderMenu} from "./menuDesktop/DesktopMenu";
import {S} from "./HeaderMenu_Styles.ts"

export const Header = () => {

    return (
        <S.StyledHeader>
            <Container>
                <S.HeaderWrapper>
                    <HeaderMenu />
                </S.HeaderWrapper>
            </Container>
        </S.StyledHeader>
    );
};
