
import './App.css';
import React, { Component } from 'react';
import middleware from './services/middleware';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/commons/Layout';


export default class App extends Component {

  async componentDidMount() {
    console.log('aqui')
    const resp = await middleware.http.get('http://localhost:3002/');
    console.log(resp)

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/about">
            <ItemDetail />
          </Route>
          <Route path="/users">
            <SearchResult />
          </Route>
          <Route component={Layout} path="/">
          </Route>
        </Switch>
      </Router>
    )
  }

}


