import React, { Component } from 'react';
import Layout from '../commons/Layout';
import './ItemDetail.scss'
export default class ItemDetail extends Component {
    state = {
        full_item: {},
        item: {}
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({ full_item: this.props.location.params, item: this.props.location.params.item })
    }

    // function to get decimal parts in int number
    loadAmount() {
        const { item } = this.state;
        if (item.price != undefined) {
            var num_parts = item.price.amount.toString().split(".");
            num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            return num_parts.join(".");

        }
    }

    render() {
        const { full_item, item } = this.state;
        console.log(item)
        return (
            <Layout>
                <div className="main">
                    <div className="container-img-detail">
                        <div class="container-img">
                            <img className="img-detail-item" src={full_item.picture} />
                        </div>
                        <div className="price-detail-container">
                            <p className="sell-quantity">{full_item.condition} - {full_item.sold_quantity} vendidos</p>
                            <h2 className="name-item">{item.title}</h2>
                            <p className="price-item">${this.loadAmount()}</p>
                            <div class="button-container">
                                <button className="buy-button">Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div className="detail-container">
                        <h1 className="description-title">Descripcion del producto</h1>
                        <p className="text-detail">{full_item.description}</p>
                    </div>

                </div>
            </Layout>
        )
    }
}