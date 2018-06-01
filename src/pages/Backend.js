import React, { Component } from 'react';
import styled from 'react-emotion';
import getRandomSchedule from '../getRandomSchedule';
import { database } from '../firebase';

const Container = styled.div`
  position: relative;
`;

const Button = styled.div`
  font-size: 1.2rem;
`;

class Backend extends Component {
  handleClick = () => {
    console.log(getRandomSchedule());
    console.log(database);
    database.ref(`/`).set(getRandomSchedule());
  };
  render() {
    return (
      <Container>
        <Button onClick={this.handleClick}>Mock</Button>
      </Container>
    );
  }
}

export default Backend;
