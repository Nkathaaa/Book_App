import React, { Component } from 'react';
import {connect} from "react-redux";
import { GetUserPosts } from "../../actions";
import { Link } from 'react-router-dom';
import moment from "moment-js"

class viewUserPosts extends Component {

    componentWillMount(){
        this.props.dispatch(GetUserPosts(this.props.user.login.id))
    }
    displayUserPosts=(user)=>(
       user.userPosts ?
          user.userPosts.map(item=>(
             <tr key={item._id}>
                <td><Link to={`/user/editPost/${item._id}`}>{item.name} </Link></td>
                <td>{item.author}</td>
                
                <td>{moment(item.createAt).format("MM/DD/YY")}</td>
                <td>{item.review}</td>
               
             </tr>
          ))
       :null

    )
    render() {
        console.log(this.props)
        const user=this.props.user
        return (
  
            <div className="user_posts">
            <h4>Your reviews:</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Date</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {this.displayUserPosts(user)}
                </tbody>
            </table>
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
export default connect(mapStateToProps)(viewUserPosts)