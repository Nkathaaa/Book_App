import { connect } from "react-redux";
import React, { Component } from 'react';
import {getReviewerWithId,clearReviewerOfId} from  "../../actions"

class BookView extends Component {
    componentWillMount(){
        this.props.dispatch(getReviewerWithId(this.props.match.params.id))
       
    }
    componentWillUnmount(){
        this.props.dispatch(clearReviewerOfId())
    }
    renderBook=(books)=>(
        books.book ?
       <div className="br_container">
           <div className="br_header">
               <h2>{books.book.name}</h2>
               <h5>{books.book.author}</h5>
               <div className="br_review">
                   <span>{books.reviewer.lastname}</span>

               </div>
               
            </div> 

          <div className="br_review">
              {books.book.review}
          </div>
          <div className="br_box">
              <div className="left">
                  <div>
                      <span>Pages:</span>{books.book.pages}
                  </div>
                  <div>
                      <span>Price:</span>{books.book.price}
                  </div>
              </div>
              <div className="right">
              <span>Rating:</span>{books.book.rating}
               </div>   

          </div>
       </div>
        :
        null

    )
    render() {
        console.log(this.props)
         const books=this.props.books
        return (
            <div>
            {this.renderBook(books)}
                
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
export default connect(mapStateToProps)(BookView) 