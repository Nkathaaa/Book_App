import React from 'react';
import {Switch,Route} from 'react-router-dom';
import BookView from './components/Books/bookView';
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import Login from "./containers/admin/login";
import Logout  from "./containers/admin/logout";
import Auth from "./hoc/auth";
import NewBook from "./components/Admin/addBook";
import User from "./components/Admin/user";
import UserPosts from "./components/Admin/viewUserPosts";
import EditPosts from "./components/Admin/editBook";
import UserRegister from "./containers/admin/register";

const Routes=()=> {
        return (
           
         <Layout>
           <Switch>
               <Route path="/" exact component={Auth(Home,null)}/>  
               <Route path="/login" exact component={Auth(Login,false)}/>
               <Route path ="/user" exact component={Auth(User,true)}/>
               <Route path="/books/:id" exact component={BookView}/>
               <Route path="/user/addBook" exact component={Auth(NewBook,true)}/>
               <Route path="/user/userPosts" exact component={Auth(UserPosts,true)}/>
               <Route path="/user/editPost/:id" exact component={Auth(EditPosts,true)}/>
               <Route path="/user/logout" exact component={Auth(Logout,true)}/>
               <Route path="/register" exact component={Auth(UserRegister,true)}/>

             
           </Switch>
           </Layout>  
           
        
        );
    
}

export default Routes;
