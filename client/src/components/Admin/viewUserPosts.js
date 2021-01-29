import React, { Component } from 'react';
import {connect} from "react-redux";
import { GetUserPosts } from "../../actions"

class viewUserPosts extends Component {

    componentWillMount(){
        this.props.dispatch(GetUserPosts(this.props.user.login.id))
    }

    render() {
        return (
            <div>
              Hi
            </div>
        )
    }
}
function mapStateToProps(state)

{
    console.log(state)
return{
    user:state.user
}
}
export default connect(mapStateToProps)(viewUserPosts)