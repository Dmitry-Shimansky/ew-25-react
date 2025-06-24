import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Button = styled.button`
    position: relative;
    width: 152px;
    height: 53px;
    color: rgb(255, 255, 255);
    background-color: ${Theme.colors.accent};
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0;

    &:active {
        transform: scale(0.98);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
`;