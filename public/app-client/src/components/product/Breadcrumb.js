import React from 'react'
import {Link} from 'react-router'

const Breadcrumb = React.createClass({
	render() {
		const url = "/"
		return (
			<ol className="breadcrumb custom-breadcrumb">
			  <li><Link to={url}>Sales</Link></li>
			  <li>{this.props.name}</li>
			</ol>
		)
	}
});

export default Breadcrumb;