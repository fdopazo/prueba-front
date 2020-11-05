import React, { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import { connect } from "react-redux";
import { loader } from '../../redux/actions/LoaderActions';
import './Layout.scss';

/*
*Main layout, contain the 
*searchbox and others childs
*/

class Layout extends Component {
    state = {
        categories: this.props.item.items_data.categories || [],
        loader: false,
        noResults: ""
    }

    async componentWillReceiveProps(nextProps) {
        const { categories } = this.state
        if (nextProps !== this.state && categories) {
            this.setState({ categories: this.props.item.items_data.categories || [] });
        }
    }

    loader() {
        const { loader_value } = this.props.loader_value;
        if (loader_value)
            return (
                <div className="loader" ></div >
            )
    }

    noResults(result, search) {
        if (result) {
            this.setState({ noResults: `No existe resultados para: ${search}` })
        } else {
            this.setState({ noResults: "" })
        }
    }

    render() {
        const { categories, noResults } = this.state;
        return (
            <div className="App">
                <SearchBox noResult={(result, search) => { this.noResults(result, search); }} />
                {this.loader()}
                <p className="container-detail-item">{noResults}</p>
                <p className="container-detail-item">{categories.join(' > ')}</p>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, {
    loader
})(Layout);

