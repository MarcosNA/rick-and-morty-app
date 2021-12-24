import styled from "styled-components";

export const HeaderWraper = styled.header `
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px white solid ;
    align-items: center;
    background-color: rgb(37, 107, 92);

    .logo{
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    nav{
        flex: 1 1 auto;
        display: flex;
        justify-content: space-evenly;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .login{
        a{
            color: black;
            font-size: 2rem;
            padding: 1rem;
        }
    }

`