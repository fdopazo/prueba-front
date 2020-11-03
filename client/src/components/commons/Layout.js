import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './Layout.scss';

export default class Layout extends Component {
    render() {
        return (
            <div className="App">
                <SearchBox />
                <p className="container-detail-item">Celphone > informatic > ihpone 12</p>
                {this.props.children}
            </div>
        )
    }
}

