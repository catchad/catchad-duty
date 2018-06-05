import React, { Component } from 'react';
import styled from 'react-emotion';
import getRandomSchedule from '../getRandomSchedule';
import { database } from '../firebase';

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  display: block;
  position: relative;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #666;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  width: calc(100% - 32px);
  margin: 10px auto;
  padding: 10px;
  cursor: pointer;
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

class Backend extends Component {
  handleClick = () => {
    database.ref(`/schedule`).set(getRandomSchedule());
  };
  handleSend = () => {
    const key =
      'AAAAT8R2EPY:APA91bGXeH2_9oIGqCHL1PA8QsjnMMCHLfENE-1AZBlzwuUMGd_ruo33bV9dwK-bBL_KnyhLIjZPF_lvObdRn0JG02xEKS5zYGe3uMo55HSL5kGaZlIhb3CfRj-7eLM_weWawKFLDK8U';
    const to =
      'c7wTC3JEX1k:APA91bHn-mwgNwUK0QVqHSxVGpdnAXNlu2-C0lNudOBgdzaYBj6ed4-ClZBxxZCYv3EtwEX0lLAAbe1zmO2I3KTH9BdNtdXa8opVymScTLPxim-hzsSTXJQfD3rpY2bUAZu0PTvzsaVV';
    const notification = {
      title: '貓取值日生關心您',
      body: '今天您是值日生，記得去倒垃圾和打掃喲。',
      icon: 'logo.png',
      click_action: 'https://catchad-duty.firebaseapp.com'
    };

    fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        Authorization: 'key=' + key,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        notification: notification,
        to: to
      })
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  render() {
    return (
      <Container>
        <Button onClick={this.handleClick}>Mock</Button>
        <Button onClick={this.handleSend}>Send</Button>
      </Container>
    );
  }
}

export default Backend;
