import React, { useState, useEffect } from 'react';
import { Container,Grow,Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';

import Navbar from './components/index';
import {Footer,Services,Ourdepartment,Team} from './components/'
import GlobalStyles from './globalStyles';

import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import {servicesData} from './components/Services/data'
import { teamData } from './components/Teams/Team.js';
import { Link } from "react-router-dom";



const App = () =>{
    const [currentId,setCurrentId]=useState(0);
      // delete this
    const dispatch = useDispatch(); // redux hooks
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch])
    return (

      // <Container maxidth="lg">
          
          
      //         <Grow in>
      //             <Container>
      //                 <Grid container justify="space-between" alignItems="strech" spacing={3}>
      //                     {/* <Grid item xs = {12} sm = {7}>
      //                       <Posts setCurrentId={setCurrentId} />
      //                     </Grid> */}
      //                     <Grid item xs = {12} sm = {4}>
      //<Form currentId={currentId} setCurrentId={setCurrentId} />
      //                         </Grid>
      //                 </Grid>
      //             </Container>
      //         </Grow>

      // </Container>
      
    <Router>
      <GlobalStyles/>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={Home} />
     </Switch>
    
     <Services heading='Our services 'data={servicesData}/>
     <Ourdepartment heading='Specialist 'data={teamData}/>
     <Team/>
     <Footer/>
    </Router>
      );
    
}



export default App;