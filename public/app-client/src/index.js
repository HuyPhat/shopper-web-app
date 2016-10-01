import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import App from './App'
import Home from './components/home/Home'
import SaleFilteredList from './components/sale/SaleFilteredList'
import ProductDetail from './components/product/ProductDetail'

import './assets/font-awesome/css/font-awesome.min.css'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/sales" component={Home}/>
            <Route path="/sales/:id" component={SaleFilteredList}/>
            <Route path="/products/:id" component={ProductDetail}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
