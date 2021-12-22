import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes } from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavIteBtn,
    NavBtnLink
 } from './Navbar.elements.js';
 import {Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
const Navbar = () => {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick=()=>setClick(!click);
    const showButtton=()=>{
        if(window.innerWidth <= 960){
           setButton(false); 
        }
        else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButtton()
    },[])
    window.addEventListener('resize',showButtton);
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>

            <Nav>
                <NavbarContainer>
                   <NavLogo to="/">
                      <NavIcon/>
                          IGAD Cancer Center , Addis Ababa
                   </NavLogo>
                   <MobileIcon onClick={handleClick}>
                       {
                           click ? <FaTimes /> : <FaBars />
                       }
                   </MobileIcon>
                   <NavMenu onClick={handleClick}>
                       <NavItem>
                           <NavLinks to='/'>
                               Home
                           </NavLinks>
                       </NavItem>
                   
                       <NavItem>
                           <NavLinks to="/services">
                               Services
                           </NavLinks>
                       </NavItem>
                   
                   
                       <NavItem>
                           <NavLinks to='/department'>
                               Our Department
                           </NavLinks>
                       </NavItem>
                   
                  
                       <NavItem>
                           <NavLinks to='/specialist'>
                               Specialists
                           </NavLinks>
                       </NavItem>
                  
                       <NavItem>
                           <NavLinks to='/contactus'>
                              Contact Us
                           </NavLinks>
                       </NavItem>

                   </NavMenu>
                   
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
