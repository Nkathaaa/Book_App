import React from 'react';
import {Switch,Route} from 'react-router-dom';
import BookView from './components/Books/bookView';
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import Login from "./admin/login"
const Routes=()=> {
        return (
           
          
           <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/books/:id" exact component={BookView}/>
               <Route path="/login/" exact component={Login}/>
             
             
           </Switch>
           
           
        );
    
}

export default Routes;
