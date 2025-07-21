import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SectionTitle = styled.h2`
    ${font({family: 'Exo 2', weight: 400, Fmax: 38, Fmin: 30})}
    
    color: ${Theme.colors.sectionTitle};
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 49px;
    
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${Theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -20px;
        transform: translateX(-50%);
    }

    @media ${Theme.media.mobile} {
        margin-bottom: 38px;
    }
`;