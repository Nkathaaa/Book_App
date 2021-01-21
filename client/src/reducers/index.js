import React from 'react';
import { combineReducers } from 'redux';
import books from './book_reducers';
import user from './user_reducer';


const rootreducers=combineReducers({
    books,
    user


})
export default rootreducers