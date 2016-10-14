/**
 * Created by phathuy on 9/18/16.
 */
import React from 'react'
import {Grid, Row, Col, Breadcrumb, ButtonToolbar, Button, Accordion, Panel, Image} from 'react-bootstrap'
import $ from "jquery"
import NumberFormat from 'react-number-format'
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
            let product = this.state.product;
            let url = '/sales/' + product.sale._id;
            let productInfoArray = product.description.secondary.split("\n");
            let productInfo = productInfoArray.map((item,index)=>
                <li key={index}>{item}</li>
            );
            let materialCareArray = product.materialCare.split("\n");
            let materialCare = materialCareArray.map((item,index)=>
                <li key={index}>{item}</li>
            );
            let sizeFitArray = product.sizeFit.split("\n");
            let sizeFit = sizeFitArray.map((item,index)=>
                <li key={index}>{item}</li>
            );
            return (
                <Grid className="product-detail-container">
                    <Row>
                        <Col sm={12}>
                            <Breadcrumb className="custom-breadcrumb">
                                <Breadcrumb.Item href="/">Sales</Breadcrumb.Item>
                                <Breadcrumb.Item href={url}>{this.state.product.sale.name}</Breadcrumb.Item>
                                <Breadcrumb.Item active>{this.state.product.name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={7}>
                            <ProductImageSlider images={this.state.product.images} />
                            <div className="product-summary">
                                <Image src={product.brand.logo} responsive />
                                <div className="description-heading"><q>{product.description.heading}</q></div>
                                <div>{product.brand.description}</div>
                            </div>
                        </Col>
                        <Col sm={5} className="product-more-detail">
                            <p className="brand-name">{product.brand.name}</p>
                            <p className="product-name">{product.name}</p>
                            <NumberFormat className="price original-price" value={product.retailPrice} displayType={'text'} thousandSeparator={true} suffix={'đ'}/>
                            <NumberFormat className="price sale-price" value={product.salePrice} displayType={'text'} thousandSeparator={true} suffix={'đ'}/>
                            <ButtonToolbar>
                                <Button className="btn-add-to-cart" bsSize="large" bsStyle="default" block>Add To Cart</Button>
                            </ButtonToolbar>
                            <Accordion>
                                <Panel header="PRODUCT INFORMATION" eventKey="1">
                                    <ul>{productInfo}</ul>
                                </Panel>
                                <Panel header="MATERIAL & CARE" eventKey="2">
                                    <ul>{materialCare}</ul>
                                </Panel>
                                <Panel header="SIZE & FIT" eventKey="3">
                                    <ul>{sizeFit}</ul>
                                </Panel>
                            </Accordion>
                        </Col>
                    </Row>
                </Grid>
            )
        }
    }
});

export default ProductDetail;