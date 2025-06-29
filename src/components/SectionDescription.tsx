import styled from "styled-components";
import {font} from "../styles/Common";
import {Theme} from "../styles/Theme";

export const SectionDescription = styled.p`
    ${font({family: 'Exo 2', weight: 200, Fmax: 32, Fmin: 22})}
    
    color: rgb(255, 255, 255);
    line-height: 30px;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 124px;
    
    @media ${Theme.media.mobile} {
        margin-bottom: 100px;
    }
`;