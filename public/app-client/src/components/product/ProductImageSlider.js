import React from 'react';
import {Col, Thumbnail,Image} from 'react-bootstrap';

class ProductImageSlider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bigImageUrl: props.images.All[0],
			images: props.images
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(target) {
		this.setState({bigImageUrl: target});
	}
	render() {
		return (
			<div className="product-image-slider-container">
				<Col sm={2} className="left-image-container">
					{this.state.images.All.map((image,index) =>
						<Col sm={12} key={index}><Thumbnail href="#" alt="171x180" src={image} onClick={() => this.handleClick(image)}/></Col>
					)}
				</Col>
				<Col sm={10}>
					<Image src={this.state.bigImageUrl} responsive />
				</Col>
			</div>
		)
	}
}

export default ProductImageSlider;
