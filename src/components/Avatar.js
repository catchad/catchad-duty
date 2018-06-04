import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import moment from 'moment';
import 'moment/locale/zh-tw';
import employees from '../data/employees';
import keyBy from 'lodash/keyBy';
import notFound from '../images/employees/notFound.png';

const employeesWithId = keyBy(employees, 'name');

const Container = styled.div`
  position: relative;
  flex-shrink: 0;
  margin: 0 23px 0 0;

  width: 57px;

  ${props =>
    props.isToday &&
    css`
      width: 74px;
    `};

  &:last-child {
    margin: 0 0 0 0;
  }
`;

const AspectRaioContainer = styled.div`
  position: relative;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 0 8px 0;

  ${props =>
    props.isToday &&
    css`
      box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
    `};

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 100%;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const DayText = styled.span`
  display: block;
  font-size: 0.75rem;
  opacity: 0.6;
  text-align: center;
  margin: 0 0 8px 0;
  font-weight: 300;
`;
const NameText = styled.span`
  display: block;
  font-size: 0.75rem;
  text-align: center;
  font-weight: 300;
`;

class Avatar extends Component {
  render() {
    const { name, date } = this.props;

    let dayText,
      imageLink,
      nameText,
      isToday = false;

    if (date === moment().format('YYYY-MM-DD')) {
      dayText = '今日';
      isToday = true;
    } else if (
      date ===
      moment()
        .add(1, 'days')
        .format('YYYY-MM-DD')
    ) {
      dayText = '明日';
    } else {
      dayText = moment(date, 'YYYY-MM-DD').format('dddd');
    }

    if (name === null) {
      // 星期六 or 日
      imageLink = notFound;
      nameText = '沒有人';
    } else {
      imageLink = employeesWithId[name].imageLink;
      nameText = name;
    }
    return (
      <Container isToday={isToday}>
        <DayText>{dayText}</DayText>
        <AspectRaioContainer isToday={isToday}>
          <Image
            style={{
              backgroundImage: `url(${imageLink})`
            }}
          />
        </AspectRaioContainer>
        <NameText>{nameText}</NameText>
      </Container>
    );
  }
}

export default Avatar;
