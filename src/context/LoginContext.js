import React, { Component } from 'react';
const LoginContext = React.createContext();

class LoginContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      handleUserChange: this.handleUserChange
    };
  }
  handleUserChange = user => {
    this.setState({ currentUser: user });
  };
  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export { LoginContextProvider, LoginContext };
