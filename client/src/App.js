import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import middleware from './services/middleware';
import SearchBox from './components/SearchBox/SearchBox';

export default class App extends Component {


  async componentDidMount() {
    console.log('aqui')
    const resp = await middleware.http.get('http://localhost:3002/');
    console.log(resp)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            </a>
        </header>
        <SearchBox />
      </div>
    )
  }

}


