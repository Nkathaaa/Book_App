import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCheckSquare,faCheckCircle,faCoffee } from "@fortawesome/fontawesome-free-solid";
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';


const SideNavItems = () => {
    const items=[
        {   type:"navItem",
            icon:{faBars},
            text:"Add Revies",
            link:"/user/addBook",
            restricted:false
                
         },
         {
            type:"navItem",
            icon:{faBars},
            text:"Login",
            link:"/login",
            restricted:false
                
         },
         {
            type:"navItem",
            icon:{faBars},
            text:"Logout",
            link:"/logout",
            restricted:false
                
         },{
            type:"navItem",
            icon:{faBars},
            text:"Add Admins",
            link:"/register",
            restricted:true
                
         },
         
         {
            type:"navItem",
            text:"My Reviews",
            icon:{faBars},
            link:"/user/userPosts",
            restricted:false
                
         },
               
         {
            type:"navItem",
            text:"My Profile",
            icon:{faCoffee},
            link:"/user",
            restricted:false
                
         },
         
         
      
]
const element=(item ,i)=>(
    <div key={i} className={item.type}>
         <FontAwesomeIcon icon={item.icon}  style={{color:"black"}}/>
        <Link to={item.link} >
       
            {item.text}
           
            </Link>
           
     
    </div>
)
const showItems=()=>
(
    items.map((item,i)=>{
        return element(item,i)
    })
)
    return (

        <div>
            {showItems()}
        </div>
    );
};

export default SideNavItems;