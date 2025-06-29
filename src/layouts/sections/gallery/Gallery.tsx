import {Container} from "../../../components/Container.ts";
import {Slider} from "./slide/Slide.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {S} from "./Gallery_Styles.ts"
import {Catalog} from "../catalog/Catalog.tsx";

export const Gallery = ({screenWidth}: Catalog) => {
    return (
        <S.StyledGallery>
            <Container>
                <SectionTitle>Галерея</SectionTitle>
                <Slider screenWidth={screenWidth}/>
            </Container>
        </S.StyledGallery>
    )
}

