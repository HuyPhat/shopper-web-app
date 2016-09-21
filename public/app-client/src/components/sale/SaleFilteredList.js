/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
import {Grid, Row, Col, Breadcrumb} from 'react-bootstrap'
import $ from "jquery"
import ProductItem from '../product/ProductItem'
import ProductImage from '../product/ProductImage'
// import Breadcrumbs from '../product/Breadcrumb'<Breadcrumbs name={this.state.filteredSales.name}/>
import '../../css/Current.css'

const SaleList = React.createClass({
    getInitialState() {
        return {
            filteredSales: {},
            products: [],
            url: ''
        };
    },
    componentDidMount() {
        $.ajax({
            url: "http://localhost:4000/api/v1/sales/" + this.props.params.id,
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({filteredSales: data})
                this.setState({products: data.products})
                this.setState({url: data.image4.url})
                console.log(this.state.filteredSales)
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:4000/api/v1/sales/" + this.props.params.id, status, err.toString());
            }.bind(this)
        });
    },
    render() {
        const breadcrumbInstance = (
            <Breadcrumb className="custom-breadcrumb">
                <Breadcrumb.Item href="/">Sales</Breadcrumb.Item>
                <Breadcrumb.Item active>{this.state.filteredSales.name}</Breadcrumb.Item>
            </Breadcrumb>
        );
        return (
            <Grid>
                <Row><ProductImage url={this.state.url}/></Row>
                <Row>{breadcrumbInstance}</Row>
                <Row>
                    {this.state.products.map(function (product, i) {
                        return (
                            <ProductItem data={product}/>
                        )
                    }, this)}
                </Row>
            </Grid>
        )
    }
});

export default SaleList;