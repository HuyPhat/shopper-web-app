/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'

const SaleDetail = React.createClass({
    render() {
        return (
            <h3>Message {this.props.params.id}</h3>
        )
    }
});

export default SaleDetail;