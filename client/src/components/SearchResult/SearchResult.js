import React, { Component } from 'react';
import ic_shipping from '../../assets/ic_shipping.png'
import Layout from '../commons/Layout';
import history from '../../history';
import { connect } from "react-redux";
import { getItem } from '../../redux/actions/ItemActions';
import { loader } from '../../redux/actions/LoaderActions';
import './SearchResult.scss'


class SearchResult extends Component {
    state = {
        items: this.props.item.items_data.items || [],
        loader: false
    }

    componentDidMount() {
        this.setState({ items: this.props.item.items_data.items })

    }

    //Change the item values
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.state) {
            this.setState({ items: this.props.item.items_data.items });
        }
    }

    //function to separate decimal part for a int number
    thousandSeparator(price) {
        var num_parts = price.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return num_parts.join(".");
    }

    //function to push detail route
    async loadDetail(id) {
        const item_resp = await this.props.getItem(id);
        history.push({
            pathname: `/items/${id}`,
            params: item_resp.data.res
        });
    }


    render() {
        const { items } = this.state;
        return (
            <Layout>
                <div className="main">

                    {/* begin body */}
                    {items && items.map((item) => {
                        return (
                            <div className="main-container">
                                <div className="img-text-container">
                                    <img onClick={() => this.loadDetail(item.id)} className="img-item" src={item.picture} />
                                    <div>
                                        <div className="price-and-img-container">
                                            <p className="price">${this.thousandSeparator(item.price.amount)}</p>
                                            {item.free_shiping ? <img className="shiping-img" src={ic_shipping} /> : null}
                                        </div>
                                        <p className="description">{item.title}</p>

                                    </div>
                                </div>
                                <div className="location">
                                    <p class="location-text">{item.seller_address}</p>
                                </div>
                            </div>
                        )
                    })}
                    {/* end */}

                </div>
            </Layout>
        )
    }
}


const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, {
    getItem,
    loader
})(SearchResult);

