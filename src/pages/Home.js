import React, { Component } from 'react';
import styled from 'react-emotion';
import Calendar from '../components/Calendar';
import DailyJob from '../components/DailyJob';
import MostBottom from '../components/MostBottom';
import Header from '../components/Header';
import Schedule from '../components/Schedule';

const Container = styled.div`
  position: relative;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Schedule />
        <Calendar />
        <DailyJob />
        <MostBottom />
      </Container>
    );
  }
}

export default Home;
