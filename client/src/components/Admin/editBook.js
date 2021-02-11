import React, { PureComponent } from 'react';
import {connect} from "react-redux";
import { Link } from "react-router-dom"
import { GetBook,UpdatePosts,DeletePosts,clearPosts } from "../../actions"

 class EditBook extends PureComponent {
     state={
         formdata:{
             _id:this.props.match.params.id,
             name:"",
             author:"",
             review:"",
             pages:"",
             price:"",
        
         }
     }
     submitForm=(e)=>{
      e.preventDefault()
      this.props.dispatch(UpdatePosts(this.state.formdata))
     
     }
     handleInput=(event,name)=>{
         const newformdata={
             ...this.state.formdata
         }

         newformdata[name]=event.target.value
         this.setState({
             formdata:newformdata
         })

     }
     deletePost=()=>{
         this.props.dispatch(DeletePosts(this.props.match.params.id))

     }
     componentWillUnmount=()=>{
         this.props.dispatch(clearPosts())
     }
     reloadToHomePage=()=>{
        setTimeout(()=>{
            this.props.history.push('/user/userPosts')
        },1500)
    }

     componentWillMount(){      
        this.props.dispatch(GetBook(this.props.match.params.id))
     }
    componentWillReceiveProps(nextProps){
        let book = nextProps.books.book;
        this.setState({
            formdata:{
                _id:book._id,
                name:book.name,
                author:book.author,
                review:book.review,
                pages:book.pages,
                rating:book.rating,
                price:book.price
            }
        })
    }
    render() {
        const books=this.props.books
        console.log(this.props)   
        return (
         
            <div className="rl_container article">
            {
               books.updateBook ? 
               <div className="edit_confirm">
                   post updated, 
                   <Link to={`/books/${books.book._id}}`}> Click here to see updated link</Link>
                </div>
               :
               null
            }
            {
                
                books.deletedPost ?
                <div className="red_tag">
                    Post Deleted
                    {this.reloadToHomePage()}
                </div> 
                :
                null   
            }
            <form onSubmit={this.submitForm}>
                <h2>Add a review</h2>

                <div className="form_element">
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={this.state.formdata.name}
                        onChange={(event)=>this.handleInput(event,'name')}
                    />
                </div>

                <div className="form_element">
                    <input
                        type="text"
                        placeholder="Enter author"
                        value={this.state.formdata.author}
                        onChange={(event)=>this.handleInput(event,'author')}
                    />
                </div>

                <textarea
                    value={this.state.formdata.review}
                    onChange={(event)=>this.handleInput(event,'review')}
                />

                <div className="form_element">
                    <input
                        type="number"
                        placeholder="Enter pages"
                        value={this.state.formdata.pages}
                        onChange={(event)=>this.handleInput(event,'pages')}
                    />
                </div>

                <div className="form_element">
                    <select
                        value={this.state.formdata.rating}
                        onChange={(event)=>this.handleInput(event,'rating')}
                    >
                        <option val="1">1</option>
                        <option val="2">2</option>
                        <option val="3">3</option>
                        <option val="4">4</option>
                        <option val="5">5</option>
                    </select>
                </div>

                <div className="form_element">
                    <input
                        type="number"
                        placeholder="Enter Price"
                        value={this.state.formdata.price}
                        onChange={(event)=>this.handleInput(event,'price')}
                    />
                </div>

                <button type="submit"> review</button>
                <div className="delete_post">
                    <div className="button" onClick={this.deletePost}>
                        Delete Review
                        
                    </div>
                    
                </div> 
               
            </form>
        </div>
        )
    }
}
function mapStateToProps(state)
{

 return{
     books:state.books
 }
}


export default connect(mapStateToProps)(EditBook)