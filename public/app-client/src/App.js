import React from 'react'
import logo from './logo.svg'
import './css/App.css'

const App = React.createClass({
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default App;
{/*<div className="App">*/}
    {/*<div className="App-header">*/}
        {/*<img src={logo} className="App-logo" alt="logo"/>*/}
        {/*<h2>Welcome to React</h2>*/}
    {/*</div>*/}
    {/*<div className="bestselling">*/}
        {/*<SaleList/>*/}
    {/*</div>*/}
    {/*{this.props.children}*/}
{/*</div>*/}