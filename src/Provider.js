import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginContextProvider } from './context/LoginContext';

class Provider extends Component {
  render() {
    return (
      <Router>
        <LoginContextProvider>{this.props.children}</LoginContextProvider>
      </Router>
    );
  }
}

export default Provider;
