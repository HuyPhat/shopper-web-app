/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import $ from "jquery"
import SaleItem from './SaleItem'
import '../../css/Current.css'

const SaleList = React.createClass({
    getInitialState() {
        return {
            current: []
        };
    },
    componentDidMount() {
        $.ajax({
            url: "http://localhost:4000/api/v1/sales/",
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({current: data.current});
                console.log(this.state.data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:4000/api/v1/sales/", status, err.toString());
            }.bind(this)
        });
    },
    // handleClick(id) {
    //     $.ajax({
    //         url: "http://localhost:4000/api/v1/sale/" + id,
    //         dataType: 'json',
    //         cache: false,
    //         success: function (data) {
    //             // this.setState({current: data.current});
    //             console.log(data)
    //         }.bind(this),
    //         error: function (xhr, status, err) {
    //             console.error("http://localhost:4000/api/v1/sale/" + id, status, err.toString());
    //         }.bind(this)
    //     });
    // render() {
    //     return (
    //         <Grid>
    //             <Row>
    //                 <Col lg={12} className="text-center"><h3>Today's Sales</h3></Col>
    //             </Row>
    //             <Row>
    //                 {this.state.current.map(function (current, i) {
    //                     {/*var boundClick = this.handleClick.bind(this, current._id)*/}
    //                     return (
    //                         <SaleItem key={current._id} data={current}/>
    //                     {/*<SaleItem onClick={boundClick} key={current._id} data={current}/>*/}
    //                     )
    //                 }, this)}
    //             </Row>
    //         </Grid>
    //     )
    // }
    // },
    render() {
        return (
            <Grid>
                <Row>
                    <Col lg={12} className="text-center"><h3>Today's Sales</h3></Col>
                </Row>
                <Row>
                    {this.state.current.map(function (current, i) {
                        return (
                            <SaleItem key={current._id} data={current}/>
                        )
                    }, this)}
                </Row>
            </Grid>
        )
    }
});

export default SaleList;