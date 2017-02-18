import React, {Component, PropTypes} from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connect,Provider }  from 'react-redux'
import { Link } from 'react-router'
import { PlanReducer } from '../reducer/PlanReducer'
import {render} from 'react-dom';
import Antd from '../antd';
let store = createStore(combineReducers({
      PlanReducer
   }));
render(<Provider store={store}><Antd/></Provider>,document.querySelector('#root'),()=>{});