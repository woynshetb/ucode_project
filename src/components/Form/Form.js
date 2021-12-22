import React, { useState , useEffect} from 'react';
import {  Typography  } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';


import {createPost,updatePost} from '../../actions/posts.js'
import styled,{createGlobalStyle, css} from 'styled-components';


  const GlobalStyle =createGlobalStyle`
  html{
    height: 100%;
  }
  body{
    font-family: Arial, Helvetica, sans-serif,;
   
   
  }
  `
  const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border: 1px solid #ddd;
  margin:10px 0 20px 0;
  padding :20px;
  box-sizing:border-box;
  
  `;
  const StyledFormWrapper=styled.div`
  
  display: flex;
  justify-content: right;
  
  height: 100vh;
  padding: 0 20px ;
  `
  const StyledForm =styled.form`
  
  
  width: 100%;
  height: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing:border-box;
  box-shadow:0px 0px 20px 0px rgba(0,0,0,0.2)
  `
  const StyledInput=styled.input`
  display:block;
  width:100%;
  padding: 10px 20px;
  font-size: 16px;
  border:1px solid #fff;
  ${sharedStyles}
  
  `
  const StyledButton=styled.button`
  border-radius: 4px;
background:${({primary})=>(primary ?'#4B59F7':'#0467fb')};
white-space:nowrap;
padding:${({big})=>(big ?'12px 64px':'10px 20px')};
color:#fff;
font-size:${({fontBig})=>(fontBig ?'20px':'16px')};
outline:none;
border:none;
cursor:pointer;
  
  `
  

const Form = ({currentId, setCurrentId}) =>{
    const [postData, setPostData] = useState({
        name:'',salary:'',gender:'',birth_date:''
    });
    const post = useSelector((state)=> currentId ? state.posts.find((p) =>p._id === currentId):null);
    
    const dispatch = useDispatch();

    useEffect(() =>{
        if(post) setPostData(post);
    },[post]);

    const handleSubmit =(e) =>{
        // not to get refresh in the browser 
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
            

        }
        else{
            dispatch(createPost(postData));
            
        }
        clear();  
    }
    const clear =() =>{
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    return(
        <>
        <GlobalStyle/>
       <StyledFormWrapper>
      <StyledForm autoComplete ="off" noValidate onSubmit ={handleSubmit}>
          <Typography variant ="h6"> {currentId ? 'Edit' : 'Register'} Employee's Information </Typography>
        
        <StyledInput name = "name" variant = "outlined" placeholder="Your Name" fullwidth value ={postData.name} onChange={(e)=>setPostData({ ...postData,name:e.target.value})}>
        </StyledInput>
        
        <StyledInput name = "phone" variant = "outlined" placeholder="Phone Number" fullwidth value ={postData.phone} onChange={(e)=>setPostData({ ...postData,phone:e.target.value})}>
        </StyledInput>
        <label htmlFor="message">message</label>
        <StyledInput name = "message" variant = "outlined" placeholder="Idea You want to share with us" fullwidth value ={postData.message} onChange={(e)=>setPostData({ ...postData,message:e.target.value})}>
        </StyledInput>
        <label htmlFor="email">email</label>
        <StyledInput name = "email" variant = "outlined" placeholder="Email" fullwidth value ={postData.email} onChange={(e)=>setPostData({ ...postData,email:e.target.value})}>
        </StyledInput>
        
        <StyledButton variant="container" color="primary" size="large" type="submit" fullwidth>Send</StyledButton>

      </StyledForm>
    </StyledFormWrapper>

       
  </>
    );
}

export default Form;