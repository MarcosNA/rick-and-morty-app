import styled from "styled-components";
import background from "../image/background.png"

export const MainStyled = styled.main `
    background-image: url(${background});
    background-position: bottom;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`