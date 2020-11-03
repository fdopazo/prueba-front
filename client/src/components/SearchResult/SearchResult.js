import React, { Component } from 'react';
import ic_shipping from '../../assets/ic_shipping.png'
import Layout from '../commons/Layout';
import './SearchResult.scss'
export default class SearchResult extends Component {

    render() {
        return (
            <Layout>
                <div className="main">
                    <div className="main-container">
                        <div className="img-text-container">
                            <img className="img-item" src="https://http2.mlstatic.com/D_NQ_NP_2X_653649-MLA32315712170_092019-F.webp" />
                            <div>
                                <div className="price-and-img-container">
                                    <p className="price">$1980</p>
                                    <img className="shiping-img" src={ic_shipping} />
                                </div>
                                <p className="description">Apple Ipod Touch 5g 16 gb Negro igual a nuevo completo único</p>

                            </div>
                        </div>
                        <div className="location">
                            <p class="location-text">Capital federal</p>
                        </div>
                    </div>

                    <div className="main-container">
                        <div className="img-text-container">
                            <img className="img-item" src="https://http2.mlstatic.com/D_NQ_NP_2X_653649-MLA32315712170_092019-F.webp" />
                            <div>
                                <div className="price-and-img-container">
                                    <p className="price">$1980</p>
                                    <img className="shiping-img" src={ic_shipping} />
                                </div>
                                <p className="description">Apple Ipod Touch 5g 16 gb Negro igual a nuevo completo único</p>

                            </div>
                        </div>
                        <div className="location">
                            <p class="location-text">Capital federal</p>
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}

