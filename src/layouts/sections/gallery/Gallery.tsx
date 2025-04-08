import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container.ts";
import {Slider} from "./slide/Slide.tsx";

export const Gallery = () => {
    return (
        <StyledGallery>
            <Container>
                <Slider />
            </Container>
        </StyledGallery>
    )
}

const StyledGallery = styled.section`
    height: 40vh;
`;

