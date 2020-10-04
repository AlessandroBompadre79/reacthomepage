import React, { Component }  from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              <img src={logo} className="App-logo" alt="logo" />
              Bompadre Alessandro 
            </NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
