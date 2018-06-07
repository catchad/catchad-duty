import React, { Component } from 'react';
import styled from 'react-emotion';
import Calendar from '../components/Calendar';
import DailyJob from '../components/DailyJob';
import MostBottom from '../components/MostBottom';
import Header from '../components/Header';
import Schedule from '../components/Schedule';
import registryFirebaseMessaging from '../registryFirebaseMessaging';
import { messaging } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';

const Container = styled.div`
  position: relative;
`;

class Home extends Component {
  componentDidMount() {
    const { currentUser } = this.props;

    registryFirebaseMessaging(currentUser);

    messaging.onMessage(function(payload) {
      console.log('Message received. ', payload);
      toast(payload.notification.body, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
  }

  render() {
    const { currentUser } = this.props;
    return (
      <Container>
        <ToastContainer />

        <Header currentUser={currentUser} />
        <Schedule />
        <Calendar />
        <DailyJob />
        <MostBottom />
      </Container>
    );
  }
}

export default Home;
