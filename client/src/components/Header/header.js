import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from "../SideNav/sideNav";
import {Link } from "react-router-dom";


 class Header extends Component 
 {
     state=
     {
         showNav:false
     }
     onHideNav=()=>
     {
         this.setState({showNav:false})
     }
    render() {
        return (
            <header>
           <div className="open_nav">
              
              <FontAwesomeIcon icon={faBars}
                      onClick={()=> this.setState({showNav:true})}
                      style={{
                          color:'#ffffff',
                          padding:'10px',
                          cursor:'pointer'
                      }}
                  />
           
                  </div>  
                 <Nav  showNav={this.state.showNav} oHideNav={()=>this.onHideNav()} />
                <Link to="/" className="logo"><h2> Book Shelf</h2></Link>
            
    </header>
        );
    }
}
export default  Header