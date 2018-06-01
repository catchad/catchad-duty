import React, { Component } from 'react';
import styled from 'react-emotion';
import moment from 'moment';
import 'moment/locale/zh-tw';
import times from 'lodash/times';
import random from 'lodash/random';
import keyBy from 'lodash/keyBy';
import keys from 'lodash/keys';
import sortBy from 'lodash/sortBy';
import flatMap from 'lodash/flatMap';
import shuffle from 'lodash/shuffle';
import mapValues from 'lodash/mapValues';
import map from 'lodash/map';
import employees, { employeesByGroup, Groups } from '../data/employees';

const Container = styled.div`
  position: relative;
`;

const Button = styled.div`
  font-size: 1.2rem;
`;

class Backend extends Component {
  getCountWithSaturdaySunday = () => {
    let count = employees.length;
    times(count, index => {
      const day = moment()
        .add(index, 'days')
        .day();
      if (day === 6 || day === 0) {
        count = count + 1;
      }
    });
    return count;
  };
  addNewData = () => {
    const employeesByGroupShuffled = mapValues(employeesByGroup, value =>
      shuffle(value)
    );

    const employeesByGroupShuffledArray = flatMap(
      employeesByGroupShuffled,
      item => item
    );
    const data = times(this.getCountWithSaturdaySunday(), index => {
      const dayMoment = moment().add(index, 'days');
      const day = dayMoment.day();

      let name;

      if (day === 6 || day === 0) {
        name = null;
      } else {
        name = employeesByGroupShuffledArray.shift();
      }

      return {
        date: dayMoment.format('YYYY-MM-DD'),
        name: name
      };
    });

    return data;
  };
  generateRandomData = () => {
    console.log(this.addNewData());

    // const data = times(employees.length, index => ({
    //   date: moment()
    //     .add(index, 'days')
    //     .format('YYYY-MM-DD'),
    //   name: employeesByGroupShuffledArray[index].name
    // }));
    // console.log(data);
    // console.log(sortBy(employees, 'group'));
    // console.log(keys(Groups));
    // console.log(employeesByGroup);
    // Groups.forEach((group) => {
    //   employeesByGroup[group]
    // })
    // const mockdata = times(365, index => {
    //   return {
    //     date: moment()
    //       .add(index, 'days')
    //       .format('YYYY-MM-DD'),
    //     name: employees[random(0, employees.length - 1)].name
    //   };
    // });
    // console.log(keyBy(mockdata, 'date'));
  };
  render() {
    return (
      <Container>
        <Button onClick={this.generateRandomData}>Mock</Button>
      </Container>
    );
  }
}

export default Backend;
