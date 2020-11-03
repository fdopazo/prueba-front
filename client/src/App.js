
import './App.css';
import React, { Component } from 'react';
import middleware from './services/middleware';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends Component {

  async componentDidMount() {
    console.log('aqui')
    const resp = await middleware.http.get('http://localhost:3002/');
    console.log(resp)

  }

  render() {
    return (

      <div className="App">
        <SearchBox />
        <p className="container-detail-item">Celphone > informatic > ihpone 12</p>
        <Router>

          <Switch>
            <Route path="/about">
              <ItemDetail />
            </Route>
            <Route path="/users">
              <SearchResult />
            </Route>
            <Route path="/">
              <SearchResult />
            </Route>
          </Switch>

        </Router>

      </div>
    )
  }

}


