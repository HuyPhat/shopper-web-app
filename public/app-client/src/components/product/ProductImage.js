import React from 'react'
// import Moment from "moment"
// import {Grid, Row, Col} from 'react-bootstrap'
// import {Link} from 'react-router'
import '../../css/ProductImage.css'

const ProductImage = React.createClass({
    render() {
        return (
            <section className="bump-outer large">
    			<img className="fluid category-hero" src={this.props.url}/>
    		</section>
        )
    }
});

export default ProductImage;