import React, { Component } from 'react';
import Logo_ML from '../../assets/Logo_ML.png';
import ic_Search from '../../assets/ic_Search.png';


import './SearchBox.scss';

export default class SearchBox extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="container">
                    <div className="logo-container">
                        <img src={Logo_ML} alt="Mercado libre logo" className="logo" />
                    </div>
                    <form className="form">
                        <input className="input-header" placeholder="Nunca dejes de buscar" />
                        <button class="search-button">
                            <img src={ic_Search} className="search-icon" alt="Boton busqueda" />
                        </button>


                    </form>
                </div>


            </header >


        )
    }

}