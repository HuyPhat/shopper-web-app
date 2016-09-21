/**
 * Created by phathuy on 9/18/16.
 */
import React from 'react'
import {Grid, Row, Col, Breadcrumb} from 'react-bootstrap'
import $ from "jquery"
// import Moment from "moment"
// import {Link} from 'react-router'
// import '../../css/ProductItem.css'

const ProductDetail = React.createClass({
    requestData() {
        this.serverRequest = $.ajax({
            url: "http://localhost:4000/api/v1/products/" + this.props.params.id,
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data)
                this.ret_Data = data;
                // this.setState({product: data})
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
    componentWillMount() {
        this.requestData()
    },
    componentDidMount() {
        console.log(this.ret_Data)
        this.setState({product:this.ret_Data})
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
        console.log('componentWillUnmount')
    },

    render() {
        console.log(this.state.product)
        // const url = "/sales/" + this.state.product.sale._id
        return (
            <Grid>
                <Row>
                    {/*<Breadcrumb className="custom-breadcrumb">*/}
                        {/*<Breadcrumb.Item href="/">Sales</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item href={url}>{this.state.product.sale.name}</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item active>{this.state.product.name}</Breadcrumb.Item>*/}
                    {/*</Breadcrumb>*/}
                </Row>
            </Grid>
        )
    }
});

export default ProductDetail;