import React, { Component } from 'react';
import Layout from '../commons/Layout';
import './ItemDetail.scss'
import { connect } from "react-redux";
import { getItem } from '../../redux/actions/ItemActions';

class ItemDetail extends Component {
    state = {
        full_item: {},
        item: {},
        id: "",
        loader: false,
        noResults: false
    }

    async componentDidMount() {
        this.setState({ loader: true })
        if (this.props.particular_item === undefined) {
            const resp = await this.props.getItem(this.props.match.params.id)
            if (resp.data.ok) {
                this.setState({ full_item: this.props.item.particular_item, item: this.props.item.particular_item.item, loader: false })
            } else {
                this.setState({ noResults: true })
            }
        } else {
            this.setState({ full_item: this.props.item.particular_item, item: this.props.item.particular_item.item.item, loader: false })
        }

    }

    // function to get decimal parts in int number
    loadAmount() {
        const { item } = this.state;
        if (item.price !== undefined) {
            var num_parts = item.price.amount.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return num_parts.join(".");
        }
    }

    loader() {
        const { noResults } = this.state
        if (!noResults) {
            return (
                <div className="loader"></div >
            )
        } else {
            return (
                <p className="container-detail-item">no hay resultado</p>
            )
        }
    }


    render() {
        const { full_item, item, loader } = this.state;

        return (
            <Layout>
                {loader ? this.loader() : (
                    <div className="main">
                        <div className="container-img-detail">
                            <div className="container-img">
                                <img alt="Imagen item" className="img-detail-item" src={full_item.picture} />
                            </div>
                            <div className="price-detail-container">
                                <p className="sell-quantity">{full_item.condition} - {full_item.sold_quantity} vendidos</p>
                                <h2 className="name-item">{item.title}</h2>
                                <p className="price-item">${this.loadAmount()}</p>
                                <div className="button-container">
                                    <button className="buy-button">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div className="detail-container">
                            <h1 className="description-title">Descripcion del producto</h1>
                            <p className="text-detail">{full_item.description}</p>
                        </div>

                    </div>
                )}

            </Layout>
        )
    }
}


const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, {
    getItem
})(ItemDetail);