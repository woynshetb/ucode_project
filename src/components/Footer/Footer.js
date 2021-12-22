import React ,{ useState, useEffect }from 'react'
import { FooterContainer,FooterSubscription,FooterSubHeading ,FooterSubText,FooterLinksContainer,FooterLinksWrapper,FooterLinksItems,FooterLinkTitle,FooterLink,SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRight,
    SocialIcons,
    SocialIconLink,
} from './Footer.element.js'
import { useDispatch } from 'react-redux';
import {getPosts } from '../../actions/posts'
import Form from '../Form/Form';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
    const [currentId,setCurrentId]=useState(0);
    // delete this 
  const dispatch = useDispatch(); // redux hooks
  useEffect(()=>{
      dispatch(getPosts());
  },[currentId, dispatch])
    return (
        <FooterContainer>
           <FooterSubscription>
               <FooterSubHeading>
                  Contact Us
               </FooterSubHeading>
               <FooterSubText>
                   We love to Hear You opinion
                   
               </FooterSubText>
               <Form currentId={currentId} setCurrentId={setCurrentId} />
               <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinksItems>
                      <FooterLinkTitle>
                          Contact Us
                      </FooterLinkTitle>
                      <FooterLink href='https://igad.int/divisions/health-and-social-development/2674-igad-officially-inaugurates-its-regional-cancer-centre-of-excellence-at-a-foundation-laying-ceremony-in-addis-ababa-ethiopia'>
                      What We do
                      </FooterLink>
                      <FooterLink to='/'>
                       Abou IGAD Region
                      </FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>
                          About Us
                      </FooterLinkTitle>
                      <FooterLink href='https://igad.int/divisions/health-and-social-development/2674-igad-officially-inaugurates-its-regional-cancer-centre-of-excellence-at-a-foundation-laying-ceremony-in-addis-ababa-ethiopia'>
                      What We do
                      </FooterLink>
                      <FooterLink to='/'>
                       Abou IGAD Region
                      </FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>
                         Social Media
                      </FooterLinkTitle>
                      <FooterLink to='/'>
                       Abou IGAD Region
                      </FooterLink>
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>
                         Social Media
                      </FooterLinkTitle>
                      <FooterLink to='/'>
                       Abou IGAD Region
                      </FooterLink>
                  </FooterLinksItems>
                  </FooterLinksWrapper> 
           </FooterLinksContainer>
           <SocialMedia>
             <SocialMediaWrap>
                 <SocialLogo to="/">
                   <SocialIcon />
                      IGAD Cancer Center
                   
                 </SocialLogo>
                 <WebsiteRight>
                     IGAD Cancer Center
                 </WebsiteRight>
                 <SocialIcons>
                     <SocialIconLink href="" target="_blank" arial-label="facebook">
                     <FaFacebook/>
                     </SocialIconLink>
                     <SocialIconLink href="" target="_blank" arial-label="Instagram">
                     <FaInstagram/>
                     </SocialIconLink>
                     <SocialIconLink href="" target="_blank" arial-label="LinkedIn">
                     <FaLinkedinIn/>
                     </SocialIconLink>
                 </SocialIcons>
                 </SocialMediaWrap>  
           </SocialMedia>
           </FooterSubscription>
           
        </FooterContainer>
    )
}

export default Footer;
