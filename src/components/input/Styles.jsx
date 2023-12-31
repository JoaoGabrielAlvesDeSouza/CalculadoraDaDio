import styled from "styled-components";

export const InputContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 75px;
    background-color: #AAAAFF;
    font-size: 24px;
    cont-family: 'Roboto';

    input {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        height: 75px;
        padding: 0 10px;    
        border: 0;
        background-color: #AAAAFF;
        color: #FFFFFF;
        float: right;
        clear: both;
        font-size: 24px;
        font-family: 'Roboto';
    }
`