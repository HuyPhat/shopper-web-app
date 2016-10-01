/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import $ from "jquery"
import SaleItem from './SaleItem'
import '../../css/Current.css'

const SaleListHome = React.createClass({
    getInitialState() {
        return {
            current: [],
            featured: {}
        };
    },
    componentDidMount() {
        $.ajax({
            url: "http://localhost:4000/api/v1/sales/",
            dataType: 'json',
            cache: false,
            success: function (data) {
                this.setState({current: data.current});
                this.setState({featured: data.featured});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("http://localhost:4000/api/v1/sales/", status, err.toString());
            }.bind(this)
        });
    },
    render() {
        console.log(this.state.featured);
        const imgSrc = this.state.featured.image1 ? this.state.featured.image1.url : "";
        return (
            <section>
                <section>
                    <a className="image-link" href={"/sales/" + this.state.featured.id}>
                        <img className="fluid category-hero" src={imgSrc}/>
                    </a>
                </section>
                <section>
                    <Grid>
                        <Row>
                            <Col lg={12} className="text-center"><h3>Shop Today's Sales</h3></Col>
                        </Row>
                        <Row>
                            {this.state.current.map(function (current, i) {
                                return (
                                    <SaleItem key={current._id} data={current}/>
                                )
                            }, this)}
                        </Row>
                    </Grid>
                </section>
            </section>
        )
    }
});

export default SaleListHome;