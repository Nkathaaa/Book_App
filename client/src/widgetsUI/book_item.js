import React from 'react';
import { Link } from 'react-router-dom';

const Book_Item = (item) => {
    return (

        <Link to={`/books/${item._id}`} className="book_item">
            <div className="book_header">
                <h2>{item.name}</h2>
            </div>
            <div className="book_items">
                {item.author}
            </div>
            <div className="book_bubble">
              <strong>Rating</strong>   ${item.rating}
            </div>
            <div className="book_bubble">
            <strong>Price</strong> {item.price}
            </div>
            <div className="book_bubble"  >    
            <strong>Pages</strong>    {item.pages}
            </div>
        </Link>

           
    );
};

export default Book_Item;