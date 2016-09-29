/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
import Moment from "moment"
import {Grid, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router'
// import './css/Sale.css'

const SaleItem = React.createClass({
    render() {
        const formattedDT = 'Endings in ' + Moment(this.props.data.endDate).fromNow(true)
        const url = '/sales/' + this.props.data._id;
        return (
            <Col className="section-item" xs={12} md={6} onClick={this.props.onClick}>
                <Link to={url}>
                    <img className="fluid" role="presentation" src={this.props.data.image2.url}/>
                    <div className="caption">
                        <h3>{this.props.data.title}
                            <span className="glyphicon glyphicon-chevron-right small"></span>
                        </h3>
                        <p className="text-muted">{formattedDT}</p>
                    </div>
                </Link>
            </Col>
        )
    }
});

export default SaleItem;
