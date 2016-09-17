import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './App'
import Home from './components/home/Home'
// import SaleList from './components/sale/SaleList'
// import SaleDetail from './components/sale/SaleDetail'
import SaleFilteredList from './components/sale/SaleFilteredList'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './css/index.css'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/sales/:id" component={SaleFilteredList}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
