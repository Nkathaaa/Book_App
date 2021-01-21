import React, { Component } from 'react';
import  {connect} from "react-redux";
import { LoginUser } from "../actions";

class Login extends Component {
   state={
       email:"",
       password:"",
       error:"",
       success:false
   }
   submitForm=(e)=>{
      e.preventDefault();
     this.props.dispatch(LoginUser(this.state))
      

     
}

componentWillReceiveProps(nextProps)
{
  if (nextProps.user.login.isAuth)
  {
   this.props.history.push('/user')
 }

}
handleInputEmail=(event)=>{
    this.setState({email:event.target.value})
}

handleInputPassword=(event)=>{
    this.setState({password:event.target.value})
}    
    render() {
        const  user=this.props.user
        return (
            <div className="rl_container">
             <form onSubmit={this.submitForm}>
                 <h2>Log in Here</h2>
                        <div className="form_element">
                                <input value={this.state.email} onChange={this.handleInputEmail} type="email" placeholder="Enter your username"/> 
                        </div>
                 
                    <div className="form_element">
                          <input value={this.state.password} onChange={this.handleInputPassword} type="password" placeholder="Enter your password"/>
                    </div>
                
                    <button type="submit">Log in</button>

                    <div className="error">
                    {
                        user.login ? 
                            <div>{user.login.message}</div>
                        :null
                    }
                    </div>
             </form>
            </div>

            
        )
    }
}

function mapStateToProps(state)
{
    
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Login)
