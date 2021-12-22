import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { GiAfrica } from 'react-icons/gi'
export const FooterContainer=styled.div`
background-color: #101522;
padding: 4rem 0 2 rem 0;
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;

`
export const FooterSubscription = styled.section
`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:24px;
color:#fff;
`
export const FooterSubHeading = styled.p`
font-family:'Trebuchet MS','Lucida Sans Unicode', 'Lucida',Arial,Helvetica, sans-serif;
margin-bottom: 24px;
font-size: 24px;

`

export const FooterSubText = styled.p
`
margin-bottom:24px;
font-size:20px;
`
export const FooterLinksContainer =styled.div`
width :100%;
max-width: 1000px;
display: flex;
justify-content: center;

`
export const FooterLinksWrapper=styled.div`

display: flex;

`
export const FooterLinksItems=styled.div`
display:flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;

`
export const FooterLinkTitle=styled.h2`
margin-bottom: 16px;
margin-top: -200px;

`
export const FooterLink=styled(Link)`
color: #fff;
text-decoration:none;
margin-bottom: 0.5rem;
&:hover{
    color: #0467fb;
    transition: 0ms.3s ease-out;

}

`
export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width:90%;
max-width: 1000px;
margin: 40px auto 0 auto;
`
export const SocialLogo = styled(Link)`

color: #fff;
justify-self: start;
cursor: pointer;
text-decoration:none;
font-size: 2rem;
display:flex;
align-items: center;
margin-bottom: 16px;

`
export const SocialIcon = styled(GiAfrica)
`
margin-right:10px;

`
export const WebsiteRight = styled.small`
color:#fff;
margin-bottom:16px;

`
export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
width:240px;

`
export const SocialIconLink = styled.a`
color:#fff;
font-size: 24px;
`