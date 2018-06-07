import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginContextProvider } from './context/LoginContext';
import { ScheduleContextProvider } from './context/ScheduleContext';

class Provider extends Component {
  render() {
    return (
      <Router>
        <ScheduleContextProvider>
          <LoginContextProvider>{this.props.children}</LoginContextProvider>
        </ScheduleContextProvider>
      </Router>
    );
  }
}

export default Provider;
