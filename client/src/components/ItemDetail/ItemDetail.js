import React, { Component } from 'react';
import { Button } from '../commons/Button';
import './ItemDetail.scss'
export default class ItemDetail extends Component {
    render() {
        return (
            <div className="main">
                <div className="container-img-detail">
                    <div>
                        <img className="img-detail-item" src="https://http2.mlstatic.com/D_NQ_NP_2X_653649-MLA32315712170_092019-F.webp" />
                    </div>
                    <div className="price-detail-container">
                        <p className="sell-quantity">Nuevo - 234 vendidos</p>
                        <h2 className="name-item">Deco Reverser Sombrero Oxford</h2>
                        <p className="price-item">$1.980</p>
                        <div class="button-container">
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="detail-container">
                    <h1 className="description-title">Descripcion del producto</h1>
                    <p className="text-detail">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>

            </div>
        )
    }
}