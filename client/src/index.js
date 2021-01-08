import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter}from "react-router-dom";
import {Provider} from "react-redux";
import { createStore,applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from 'redux-promise';
import rootreducers from "./reducers";
import Routes from "./route";


const createStoreWithMiddleWare=applyMiddleware(promiseMiddleware,ReduxThunk)(createStore)
ReactDOM.render(
<Provider store={createStoreWithMiddleWare(rootreducers)}>
  <BrowserRouter>
     <Routes/>
  
  </BrowserRouter>

  </Provider>
,document.getElementById('root'))