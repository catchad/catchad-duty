import React, { Component } from 'react';
import styled, { css } from 'react-emotion/macro';

const Container = styled.div`
  position: relative;
  background-color: white;
`;

const WeekText = styled.span`
  position: relative;

  display: block;
  font-size: 0.75rem;
  opacity: 0.3;
  font-weight: 300;
  text-align: center;
  margin: 0 0 5px 0;
`;

const DayTextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;
const DayText = styled.span`
  position: relative;
  display: block;
  font-size: 1rem;
  font-weight: 300;
  text-align: center;
  line-height: 1;
`;

const isTodayStyle = css`
  background-color: #fa3155;
  color: white;
`;

class CalendarDay extends Component {
  render() {
    const { week, day, isToday } = this.props;
    return (
      <Container>
        <WeekText>{week}</WeekText>
        <DayTextContainer className={isToday && isTodayStyle}>
          <DayText>{day}</DayText>
        </DayTextContainer>
      </Container>
    );
  }
}

export default CalendarDay;
