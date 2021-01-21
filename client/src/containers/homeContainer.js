import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getBooks } from "../actions";
import Book_Item from "../widgetsUI/book_item";

class HomeContainer extends Component {
    //disatches action that get books fromthe db
    componentWillMount(){
        this.props.dispatch(getBooks(3,0,'asc'))
    }
    
    renderItems=(books)=>
    (
     books.list?
     !!books.list.length && books.list.map(item=>(
         <Book_Item {...item} key={item._id}/>
     )
     )
     :
     null
    )
    loadMore=()=>{
        const count=this.props.books.list.length;
        this.props.dispatch(getBooks(1,count,'desc',this.props.books.list))
    }
    render() {
        return (
        <div>
                {this.renderItems(this.props.books)}
               <div className="loadmore" onClick={this.loadMore}>Load More

               </div>
         </div>
        )
    }
}
//selects parts of the data from the store the component needs
function mapStateToProps(state){
    return {
        books:state.books
    }
}
export default connect(mapStateToProps)(HomeContainer)