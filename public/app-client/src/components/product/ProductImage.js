import React from 'react'
import '../../css/ProductImage.css'

const ProductImage = React.createClass({
    render() {
        return (
            <section className="bump-outer large">
    			<img className="fluid category-hero" role="presentation" src={this.props.url}/>
    		</section>
        )
    }
});

export default ProductImage;