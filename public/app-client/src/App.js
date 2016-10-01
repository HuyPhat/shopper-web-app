import React from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import $ from 'jquery'
import logo from './resource/logo.png'
import './css/App.css'

const App = React.createClass({
    getInitialState() {
        return {
            'shadow': 'none'
        }
    },
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    handleScroll: function(event) {
        // if(($(document).scrollTop() + $(window).height() / 2) > ($('body').height() / 2)){
        if($(document).scrollTop()){
            this.setState({
                'shadow': 'inset 0 1px 0 rgba(255, 255, 255, .15), 0 3px 5px rgba(0, 0, 0, .075)'
            });
        }else{
            this.setState({
                'shadow': 'none'
            });
        }
        // this.setState({
        //     'shadow': 'inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075)'
        // });
    },
    render() {
        var style = {'box-shadow': this.state.shadow}
        const navbarInstance = (
            <Navbar style={style} className="navbar-fixed-top">
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="/sales"><img src={logo}/></a>
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