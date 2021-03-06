import React, { Component } from 'react';
import styled from 'react-emotion';
import Avatar from './Avatar';
import { ScheduleContext } from '../context/ScheduleContext';

const Container = styled.div`
  position: relative;
  padding: 20px 0;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  margin: 0 0 20px 0;
  padding: 0 0 0 20px;
`;

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  padding: 0 0 0 20px;
`;

class Schedule extends Component {
  render() {
    return (
      <Container>
        <Title>值日生班表</Title>
        <AvatarContainer>
          <ScheduleContext.Consumer>
            {({ schedule }) =>
              schedule.map((item, index) => {
                const { name = null, date } = item;
                return <Avatar key={index} name={name} date={date} />;
              })
            }
          </ScheduleContext.Consumer>
        </AvatarContainer>
      </Container>
    );
  }
}

export default Schedule;
