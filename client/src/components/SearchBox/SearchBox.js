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
        categories: [],
        notResults: false,
        errorMessage: '',
        errorFlag: false
    }


    // handle change input
    handleChange(event) {
        this.setState({ search: event.target.value, errorFlag: false })
    }

    //submit request, and push to correct route and page
    async onSubmit(e) {
        e.preventDefault()
        const { search } = this.state;

        if (search === '') {
            this.setState({ errorMessage: "Debe ingresar un valor", errorFlag: true })
            return true
        }

        await this.props.loader(true)
        this.props.noResult(false, "")

        const resp = await this.props.getItems(search);
        try {
            if (resp.data.ok) {
                let searchQuery = `?q=${search}`
                await this.props.loader(false)
                history.push({
                    pathname: '/items',
                    search: searchQuery,
                });
            } else {
                await this.props.loader(false)
                this.props.noResult(true, search)
            }
        } catch (e) {
            this.props.noResult(true, "No hay conexión")
        }



    }

    renderError() {
        const { errorFlag, errorMessage } = this.state;
        if (errorFlag) {
            return <p className="container-detail-item">{errorMessage}</p>
        }
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

                        <button onClick={(event) => this.onSubmit(event)} type="submit" className="search-button">
                            <img src={ic_Search} className="search-icon" alt="Boton busqueda" />
                        </button>
                    </form>
                </div>
                {this.renderError()}

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