import React from 'react';
import SideNav from "react-simple-sidenav";
import SideNavItems from './sideNavItems';

const Nav = (props) => {
   
    return (
        
        <SideNav 
        onHideNav={props.onHideNav}
         showNav={props.showNav}>
          
      <SideNavItems />
        </SideNav>
            
    );
};

export default Nav;