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
        loader: false
    }

    async componentWillReceiveProps(nextProps) {
        const { categories } = this.state
        if (nextProps !== this.state && categories) {
            this.setState({ categories: this.props.item.items_data.categories || [] });
        }
    }

    render() {
        const { categories } = this.state;
        return (
            <div className="App">
                <SearchBox />
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

