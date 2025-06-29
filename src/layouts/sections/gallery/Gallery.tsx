import {Container} from "../../../components/Container.ts";
import {Slider} from "./slide/Slide.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {S} from "./Gallery_Styles.ts"

export const Gallery = () => {
    return (
        <S.StyledGallery>
            <Container>
                <SectionTitle>Галерея</SectionTitle>
                <Slider />
            </Container>
        </S.StyledGallery>
    )
}

