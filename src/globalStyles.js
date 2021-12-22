import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Source Sans Pro', sans-sarif;
}
`;

export const Container = styled.div`
z-index:1;
width:100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width:991px){
    padding-left: 30;
    padding-right: 30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
background:${({primary})=>(primary ?'##6B5F55':'#a48671')};
white-space:nowrap;
padding:${({big})=>(big ?'12px 64px':'10px 20px')};
color:#101522;
font-size:${({fontBig})=>(fontBig ?'20px':'16px')};
outline:none;
border:none;
cursor:pointer;
&:hover{
    transition: all 0.3s ease-out;
    background:${({primary})=>(primary ?'#e4cda5':'#e4cda5')};
}

@media screen and (max-width:960px){
   width:100%; 
}
`


export default GlobalStyles;