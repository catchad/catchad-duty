import React, { Component } from 'react';
import styled from 'react-emotion';
import { withRouter, Redirect } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';

const Container = styled.div`
  position: relative;
  background-color: #fa3155;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Text = styled.h1`
  font-size: 1.2rem;
  color: white;
  letter-spacing: 5px;
  text-align: center;
  font-weight: 400;
`;

const BackText = styled.span`
  display: block;
  font-size: 0.75rem;
  color: white;
  opacity: 0.75;
  letter-spacing: 1px;
  font-weight: 300;
`;

const CurrentUserText = styled.span`
  display: block;
  font-size: 0.75rem;
  color: white;
  opacity: 0.75;
  letter-spacing: 1px;
  font-weight: 300;
`;

class Header extends Component {
  handleBack = () => {
    const { history } = this.props;
    history.push('/login');
  };
  render() {
    return (
      <LoginContext>
        {({ currentUser }) => (
          <Container>
            <CurrentUserText>
              {currentUser !== null ? currentUser : <Redirect to="/login" />}
            </CurrentUserText>
            <Text>貓取值日生</Text>
            <BackText onClick={this.handleBack}>不是你？</BackText>
          </Container>
        )}
      </LoginContext>
    );
  }
}

export default withRouter(Header);
