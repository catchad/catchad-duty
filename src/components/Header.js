import React, { Component } from 'react';
import styled from 'react-emotion';

const Container = styled.div`
  position: relative;
  background-color: #fa3155;
  padding: 10px 20px;
`;

const Text = styled.h1`
  font-size: 1.2rem;
  color: white;
  letter-spacing: 5px;
  text-align: center;
  font-weight: 400;
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <Text>貓取值日生</Text>
      </Container>
    );
  }
}

export default Header;
