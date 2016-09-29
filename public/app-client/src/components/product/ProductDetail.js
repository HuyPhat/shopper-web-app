/**
 * Created by phathuy on 9/18/16.
 */
import React from 'react'
import {Grid, Row, Col, Breadcrumb} from 'react-bootstrap'
import $ from "jquery"
import '../../css/ProductDetail.css'
import ProductImageSlider from '../product/ProductImageSlider';

const ProductDetail = React.createClass({
    requestData() {
        this.serverRequest = $.ajax({
            url: "http://localhost:4000/api/v1/products/" + this.props.params.id,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({product:data})
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:4000/api/v1/products/" + this.props.params.id, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState() {
        return {
            product: {}
        };
    },
    componentDidMount() {
        this.requestData()
    },
    componentWillUnmount() {
        this.serverRequest.abort()
    },
    render() {
        console.log(this.state.product)
        if ($.isEmptyObject(this.state.product)) {
            return (
                <Grid className="product-detail-container">
                    <Row>
                        <Col md={12}><i className="fa fa-spinner fa-pulse fa-3x fa-fw custom-fa-spinner"></i></Col>
                    </Row>
                </Grid>
            )
        }
        else {
            const url = '/sales/' + this.state.product.sale._id
            return (
                <Grid>
                    <Row>
                        <Breadcrumb className="custom-breadcrumb">
                            <Breadcrumb.Item href="/">Sales</Breadcrumb.Item>
                            <Breadcrumb.Item href={url}>{this.state.product.sale.name}</Breadcrumb.Item>
                            <Breadcrumb.Item active>{this.state.product.name}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Row>
                    <Row>
                        <Col sm={7}>
                            <div className="product-image-wrapper">
                                <ProductImageSlider images={this.state.product.images} />
                            </div>
                            <div className="apart-big apart-no-bottom hidden-xs">
                                <img className="brand-logo" src={this.state.product.brand.logo}/>
                                <h5>"{this.state.product.description.heading}"</h5>
                                <p>{this.state.product.brand.description}</p>
                            </div>
                        </Col>
                        <Col sm={5}>
                            <div className="product-info main apart-sm">
                                <div className="product-brand">{this.state.product.brand.name}</div>
                                <div className="product-title">{this.state.product.name}</div>
                                <div className="product-price">
                                    <span className="product-price-discount">{this.state.product.retailPrice}</span>
                                    <span className="product-price-total">{this.state.product.salePrice}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            )
        }
    }
});

export default ProductDetail;