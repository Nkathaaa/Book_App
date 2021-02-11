import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import { GetUsers,RegisterUser} from "../../actions"
 

 class Register extends PureComponent {
     state={
        formdata:{
            email:"",
            password:"",
            password1:"",
            firstname:"",
            lastname:"",
            role:"",
        }
     }

   handleInput=(event,name)=>{
       const newFormdata={...this.state.formdata}
       newFormdata[name]=event.target.value
       this.setState({
           formdata:newFormdata
       })

   }
   submitForm=(e)=>{
       e.preventDefault()
       this.setState({error:""})
       
        this.props.dispatch(RegisterUser({
           email:this.state.formdata.email,
           password:this.state.formdata.password,
           password1:this.state.formdata.password1,
           firstname:this.state.formdata.firstname,
           lastname:this.state.formdata.lastname,
           role:this.state.formdata.role,

       },this.props.user.AllUsers))
   }
   componentWillMount()
   {
       this.props.dispatch(GetUsers())
   }
   componentWillReceiveProps(nextProps)
   {
       if(nextProps.user.register===false)
       {
           this.setState({
               
            error:"Error,Try again"
           })
       }else
       {
           this.setState({
            formdata:
            {
                email:"",
                password:"",
                password1:"",
                firstname:"",
                lastname:"",
                role:"",
            }

           })
       }
   }
   showUsers=(user)=>(
       user.AllUsers ?
       user.AllUsers.map(item=>(
        <tr key={item._id}>
            <td>{item.firstname}{item.lastname}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
       </tr>

       ))
       :
       null

   )
  
    render() {
        console.log(this.props)
        const user=this.props.user
        return (
            
            
            <div className="rl_container">
                <form  onSubmit={this.submitForm}> 
                <div className="form_element">
                <input
                type="text"
                placeholder="Enter your email"
                value={this.state.formdata.email}
                onChange={(event)=>this.handleInput(event,"email")} /> 
                </div>
                <div className="form_element">
                <input
                type="text"
                placeholder="Enter your first name"
                value={this.state.formdata.firstname}
                onChange={(event)=>this.handleInput(event,"firstname")} /> 
                </div>
                <div className="form_element">
                <input
                type="text"
                placeholder="Enter your last name"
                value={this.state.formdata.lastname}
                onChange={(event)=>this.handleInput(event,"lastname")} /> 
                </div>

                <div className="form_element">
                <input
                type="text"
                placeholder="Enter your role"
                value={this.state.formdata.role}
                onChange={(event)=>this.handleInput(event,"role")} /> 
                </div>
               

                <div className="form_element">
                <input
                type="text"
                placeholder="Enter your password"
                value={this.state.formdata.password}
                onChange={(event)=>this.handleInput(event,"password")} /> 
                </div>

                <div className="form_element">
                <input
                type="text"
                placeholder="Enter your password again"
                value={this.state.formdata.password1}
                onChange={(event)=>this.handleInput(event,"password1")} /> 
                </div>

                
                <button type="submit">Register  </button>
                <div className="error">
                    {this.state.formdata.error}
                </div>

                </form>
                <div className="current_users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUsers(user)} 
                    </tbody>
                </table>

                </div>
            </div>
          
        )
    }
}

function mapStateToProps(state){
   
    return{
        user:state.user
    }

}
export default connect(mapStateToProps)(Register)