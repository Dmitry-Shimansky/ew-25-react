import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const StyledService = styled.section`
    
`;

const ImageContainer = styled.div`
    display: flex;
    width: 100%;
`;

const ImageWrapper = styled.div`
    grid-area: i;
    height: 250px;
    width: 400px;
    border-radius: 20px;
    overflow: hidden;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Description = styled.div`
    grid-area: d;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    gap: 10px;
`;

const DescriptionTitle = styled.h3`

`;

const DescriptionText = styled.p`

`;

const ServiceWrapper1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 500px));
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas:
        "i d";
    margin-bottom: 50px;
    justify-content: center;
    
    & ${ImageContainer} {
        justify-content: flex-start;
    }

    @media ${Theme.media.tablet860} {
        grid-template-columns: repeat(1, minmax(0, 500px));
        grid-template-rows: repeat(2, fit-content(1fr));
        row-gap: 20px;
        grid-template-areas:
            "i"
            "d";

        ${ImageContainer} {
            justify-content: center;
        }

        ${DescriptionTitle} {
            text-align: center;
        }

        ${DescriptionText} {
            text-align: justify;
            white-space: wrap;
        }
    }
`;

const ServiceWrapper2 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 500px));
    grid-template-rows: repeat(1, 1fr);
    grid-template-areas:
        "d i";
    justify-content: center;
    
    &:not(:last-child) {
        margin-bottom: 50px;
    }

    ${ImageContainer} {
        justify-content: flex-end;
    }
    
    ${DescriptionTitle} {
        text-align: end;
    }
    
    ${DescriptionText} {
        text-align: end;
    }

    @media ${Theme.media.tablet860} {
        grid-template-columns: repeat(1, minmax(0, 500px));
        grid-template-rows: repeat(2, fit-content(1fr));
        row-gap: 20px;
        grid-template-areas:
            "i" 
            "d";

        ${ImageContainer} {
            justify-content: center;
        }

        ${DescriptionTitle} {
            text-align: center;
        }

        ${DescriptionText} {
            text-align: justify;
            white-space: wrap;
        }
    }
`;

export const S = {
    StyledService,
    ServiceWrapper1,
    ServiceWrapper2,
    ImageContainer,
    ImageWrapper,
    Image,
    Description,
    DescriptionTitle,
    DescriptionText
}