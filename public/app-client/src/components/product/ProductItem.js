/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
// import Moment from "moment"
import {Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import '../../css/ProductItem.css'

const ProductItem = React.createClass({
    render() {
        const url = '/products/' + this.props.data._id
        const retailPrice = this.props.data.retailPrice
        const salePrice = this.props.data.salePrice
        return (
            <Col sm={6} md={4}>
                <div className="product-grid-item">
                    <div className="thumbnail product-thumb">
                        <Link to={url}>
                            <img src={this.props.data.image}/>
                        </Link>
                    </div>
                    <div className="product-grid-details">
                        <p className="brand">{this.props.data.brand}</p>
                        <h3>
                            <a className="title" href={url}>{this.props.data.name}</a>
                        </h3>
                        <p className="price">
                            {retailPrice !== salePrice ? <span className="original-price">{retailPrice}</span> : null}
                            {salePrice}
                        </p>
                    </div>
                </div>
            </Col>
        )
    }
});

export default ProductItem;