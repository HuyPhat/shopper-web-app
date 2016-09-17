/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import $ from "jquery"
// import SaleItem from './SaleItem'
import ProductItem from '../product/ProductItem'
import '../../css/Current.css'

const SaleList = React.createClass({
    getInitialState() {
        return {
            filteredSales: {},
            products: []
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
                console.log(this.state.filteredSales)
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:4000/api/v1/sales/" + this.props.params.id, status, err.toString());
            }.bind(this)
        });
    },
    render() {
        return (
            <Grid>
                <Row>
                    {this.state.products.map(function (product, i) {
                        return (
                            <ProductItem key={product._id} data={product}/>
                        )
                    }, this)}
                </Row>
            </Grid>
        )
    }
});

export default SaleList;