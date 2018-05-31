import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/zh-tw';
import styled from 'react-emotion/macro';
import CalendarDay from './CalendarDay';

const Container = styled.div`
  position: relative;
  border-top: 1px solid #b3b3b3;
  border-bottom: 1px solid #b3b3b3;
  padding: 16px 0;
`;

const TodayText = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: center;
  margin: 0 0 10px 0;
`;

const CalendarDayContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const DayData = [
  {
    label: 'S',
    dayNumber: moment()
      .day(0)
      .date()
  },
  {
    label: 'M',
    dayNumber: moment()
      .day(1)
      .date()
  },
  {
    label: 'T',
    dayNumber: moment()
      .day(2)
      .date()
  },
  {
    label: 'W',
    dayNumber: moment()
      .day(3)
      .date()
  },
  {
    label: 'T',
    dayNumber: moment()
      .day(4)
      .date()
  },
  {
    label: 'F',
    dayNumber: moment()
      .day(5)
      .date()
  },
  {
    label: 'S',
    dayNumber: moment()
      .day(6)
      .date()
  }
];

class Calendar extends Component {
  componentDidMount() {
    console.log(moment().day(4));
  }

  render() {
    return (
      <Container>
        <TodayText>
          {`${moment().format('ll')} ${moment().format('dddd')}`}
        </TodayText>
        <CalendarDayContainer>
          {DayData.map((item, index) => {
            return (
              <CalendarDay
                key={index}
                week={item.label}
                day={item.dayNumber}
                isToday={moment().date() === item.dayNumber}
              />
            );
          })}
        </CalendarDayContainer>
      </Container>
    );
  }
}

export default Calendar;
