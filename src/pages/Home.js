import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import Calendar from '../components/Calendar';

const Container = styled.div`
  position: relative;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Calendar />
      </Container>
    );
  }
}

export default Home;
