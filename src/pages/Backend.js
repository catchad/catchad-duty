import React, { Component } from 'react';
import styled from 'react-emotion';
import getRandomSchedule from '../getRandomSchedule';
import { database } from '../firebase';
import employees from '../data/employees';
import { ScheduleContext } from '../context/ScheduleContext';
import get from 'lodash/get';
import findIndex from 'lodash/findIndex';

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
  postData = token => {
    const key =
      'AAAAT8R2EPY:APA91bGXeH2_9oIGqCHL1PA8QsjnMMCHLfENE-1AZBlzwuUMGd_ruo33bV9dwK-bBL_KnyhLIjZPF_lvObdRn0JG02xEKS5zYGe3uMo55HSL5kGaZlIhb3CfRj-7eLM_weWawKFLDK8U';

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
        to: token
      })
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  handleSend = () => {
    database.ref(`/tokens`).once('value', snapshot => {
      snapshot.val().forEach(item => {
        this.postData(item);
      });
    });
  };
  postDataToTopic = index => {
    const key =
      'AAAAT8R2EPY:APA91bGXeH2_9oIGqCHL1PA8QsjnMMCHLfENE-1AZBlzwuUMGd_ruo33bV9dwK-bBL_KnyhLIjZPF_lvObdRn0JG02xEKS5zYGe3uMo55HSL5kGaZlIhb3CfRj-7eLM_weWawKFLDK8U';

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
        to: `/topics/${index}`
      })
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  handleSendTopics = todayPerson => {
    const index = findIndex(employees, { name: todayPerson.name });
    this.postDataToTopic(index);
  };
  render() {
    return (
      <ScheduleContext.Consumer>
        {({ schedule }) => (
          <Container>
            <Button onClick={this.handleClick}>Mock</Button>
            <Button
              onClick={() => {
                this.handleSendTopics(get(schedule, '[0]'));
              }}
            >
              Send
            </Button>
          </Container>
        )}
      </ScheduleContext.Consumer>
    );
  }
}

export default Backend;
