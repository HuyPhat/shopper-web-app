import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ProductImageSlider = ({images}) =>
	<Row>
		<Col md={10} className="big-image">
			<div className="imageSlide">
				<img className="img-responsive product-displayed-image" src={images[0]}/>
			</div>
		</Col>
		<Col md={2} className="thumbnail-container">
			<div className="outer-wrapper">
				<div className="content-wrapper">
					<div className="content">
						<div className="inner-content">
							<ul className="list-inline">
								{images.map((image, index) =>
									<li>
										<img className="thumbnail product-image-thumbnail" key={index} src={image}/>
									</li>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Col>
	</Row>

export default ProductImageSlider;