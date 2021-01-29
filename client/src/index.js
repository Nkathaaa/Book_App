import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter}from "react-router-dom";
import {Provider} from "react-redux";
import { createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from 'redux-promise';
import rootreducers from "./reducers";
import Routes from "./route";

//create store to hold the content of the app
//initilise/note middlware ie promiseMidlware and ReduxThunk t
const createStoreWithMiddleWare=applyMiddleware(ReduxThunk,promiseMiddleware,)(createStore)
ReactDOM.render(
  //the provider provides the created store to the react components in the app
<Provider store={createStoreWithMiddleWare(rootreducers)}>
  <BrowserRouter>
     <Routes/>
  
  </BrowserRouter>

  </Provider>
,document.getElementById('root'))