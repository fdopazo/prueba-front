import React, { Component } from 'react';
import { connect } from "react-redux";
import Logo_ML from '../../assets/Logo_ML.png';
import ic_Search from '../../assets/ic_Search.png';
import { getItems } from '../../redux/actions/ItemActions';
import { loader } from '../../redux/actions/LoaderActions';
import history from '../../history';
import './SearchBox.scss';

class SearchBox extends Component {
    state = {
        search: '',
        categories: []
    }


    // handle change input
    handleChange(event) {
        this.setState({ search: event.target.value })
    }

    //submit request, and push to correct route and page
    async onSubmit(e) {
        const { search } = this.state;
        await this.props.loader(true)
        e.preventDefault();
        const resp = await this.props.getItems(search);
        let searchQuery = `?q=${search}`
        history.push({
            pathname: '/items',
            search: searchQuery,
        });


    }

    render() {
        const { search } = this.state;
        return (
            <header className="main-header">
                <div className="container">
                    <div className="logo-container">
                        <img src={Logo_ML} alt="Mercado libre logo" className="logo" />
                    </div>
                    <form onSubmit={(event) => this.onSubmit(event)} className="form">
                        <input className="input-header" value={search} onChange={event => this.handleChange(event)} placeholder="Nunca dejes de buscar" />

                        <button onClick={(event) => this.onSubmit(event)} type="submit" class="search-button">
                            <img src={ic_Search} className="search-icon" alt="Boton busqueda" />
                        </button>
                    </form>
                </div>
            </header >
        )
    }

}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, {
    getItems,
    loader
})(SearchBox);