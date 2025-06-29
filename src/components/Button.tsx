import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const Button = styled.button`
    position: relative;
    width: 152px;
    height: 53px;
    color: rgb(255, 255, 255);
    background-color: ${Theme.colors.accent};
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0;
    transition: 0.3s;

    &:active {
        transform: scale(0.98);
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    &:hover {
        box-shadow: 0 0 10px dodgerblue, 0 0 20px dodgerblue;
        text-shadow: 0 0 5px white;
    }
`;