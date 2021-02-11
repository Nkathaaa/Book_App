import axios from 'axios';
import React from 'react';

const logout = (props) => {
    const request=axios.get(`/api/logout`)
    .then(request=>{
        setTimeout(()=>{
        props.history.push('/')  
        },2000)
    })
    console.log(props)
    return (
        <div className="logout_container">
           
            <h2>See you again :(</h2>
        </div>
    );
};

export default logout;

