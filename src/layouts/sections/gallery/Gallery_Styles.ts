import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const StyledGallery = styled.section`
    height: 50vh;
    background: 
            linear-gradient(to bottom, rgba(19, 20, 23, 1)0%, rgba(255, 255, 255, 0.11) 20%),
            linear-gradient(to top, rgba(19, 20, 23, 1)0%, rgba(255, 255, 255, 0.11) 60%);

    @media ${Theme.media.desktop1100} {
        height: 100%
    }
`;

export const S = {
    StyledGallery,
}