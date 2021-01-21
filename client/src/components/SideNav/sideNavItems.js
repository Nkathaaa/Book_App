import React from 'react';
import {Link} from "react-router-dom";


const SideNavItems = () => {
    const items=[
        {
            type:"nav-item",
            icon:"faCoffe",
            text:"Add Users",
            link:"/",
            restricted:false
                
         },
         {
            type:"nav-item",
            icon:"faCoffee",
            text:"Login",
            link:"/",
            restricted:false
                
         },
         {
            type:"nav-item",
            icon:"faCoffe",
            text:"Logout",
            link:"/user/logout",
            restricted:false
                
         },{
            type:"nav-item",
            icon:"faCoffe",
            text:"Add Users",
            link:"/user/add",
            restricted:false
                
         },
         
         {
            type:"nav-item",
            icon:"faCoffe",
            link:"/",
            restricted:false
                
         },
]
const element=(item ,i)=>(
    <div key={i} className={item.type}>
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