/**
 * Created by phathuy on 9/11/16.
 */
import React from 'react'
import SaleListHome from '../sale/SaleListHome'

const Home = React.createClass({
    render() {
        return (
            <div className="sell-container">
                <SaleListHome/>
            </div>
        )
    }
});

export default Home;