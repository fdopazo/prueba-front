

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import SearchResult from './components/SearchResult/SearchResult';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { Router, Route } from 'react-router-dom';
import Layout from './components/commons/Layout';
import { store } from './redux/store';
import history from './history';


export default class App extends Component {
  store = createStore(applyMiddleware(ReduxThunk));


  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path="/" component={Layout} />
          <Route exact path="/items/:id" component={ItemDetail} />
          <Route exact prev={true} path="/items" component={SearchResult} />
        </Router >
      </Provider>
    )
  }

}


