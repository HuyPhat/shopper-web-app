/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
import {Col} from 'react-bootstrap'
import {Link} from 'react-router'
import NumberFormat from 'react-number-format'
import '../../css/ProductItem.css'

const ProductItem = React.createClass({
    render() {
        const url = '/products/' + this.props.data._id;
        const retailPrice = this.props.data.retailPrice;
        const salePrice = this.props.data.salePrice;
        return (
            <Col sm={6} md={4}>
                <div className="product-grid-item">
                    <div className="thumbnail product-thumb">
                        <Link to={url}>
                            <img role="presentation" src={this.props.data.image}/>
                        </Link>
                    </div>
                    <div className="product-grid-details">
                        <p className="brand">{this.props.data.brand}</p>
                        <h3>
                            <a className="title" href={url}>{this.props.data.name}</a>
                        </h3>
                        <p className="price">
                            {retailPrice !== salePrice ? <NumberFormat className="original-price" value={this.props.data.retailPrice} displayType={'text'} thousandSeparator={true} suffix={'đ '}/> : null}
                            <NumberFormat value={this.props.data.salePrice} displayType={'text'} thousandSeparator={true} suffix={'đ'}/>
                        </p>
                    </div>
                </div>
            </Col>
        )
    }
});

export default ProductItem;