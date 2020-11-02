import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import middleware from './services/middleware';
import SearchBox from './components/SearchBox/SearchBox';
import SearchResult from './components/SearchResult/SearchResult';

export default class App extends Component {


  async componentDidMount() {
    console.log('aqui')
    const resp = await middleware.http.get('http://localhost:3002/');
    console.log(resp)

  }

  render() {
    return (
      <div class="App">
        <SearchBox />


        <SearchResult />

      </div>
    )
  }

}


