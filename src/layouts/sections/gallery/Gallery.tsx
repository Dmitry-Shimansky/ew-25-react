import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {Slider} from "./slide/Slide.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export const Gallery = () => {
    return (
        <StyledGallery>
            <Container>
                <SectionTitle>ГАЛЕРЕЯ</SectionTitle>
                <Slider />
            </Container>
        </StyledGallery>
    )
}

const StyledGallery = styled.section`
    height: 50vh;
`;

