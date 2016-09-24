import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import logo from './logo.svg'
import './css/App.css'

const App = React.createClass({

    render() {
        const navbarInstance = (
            <Navbar className="navbar-fixed-top">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/sales">iShopping</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                      <NavItem eventKey={1} href="#">Link</NavItem>
                      <NavItem eventKey={2} href="#">Link</NavItem>
                      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                      </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
        return (
            <div className="App">
                {/* 
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                 */}
                {navbarInstance}
                <div className="App-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default App;