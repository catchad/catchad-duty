import moment from 'moment';
import 'moment/locale/zh-tw';
import times from 'lodash/times';
import flatMap from 'lodash/flatMap';
import shuffle from 'lodash/shuffle';
import mapValues from 'lodash/mapValues';
import { employeesByGroup } from './data/employees';

const getEmployeesByGroupShuffledArray = () => {
  const employeesByGroupShuffled = mapValues(employeesByGroup, value =>
    shuffle(value)
  );

  const employeesByGroupShuffledArray = flatMap(
    employeesByGroupShuffled,
    item => item
  );
  return employeesByGroupShuffledArray;
};

const getRandomSchedule = () => {
  let employeesByGroupShuffledArray = getEmployeesByGroupShuffledArray();

  const data = times(365, index => {
    const dayMoment = moment().add(index, 'days');
    const day = dayMoment.day();

    let name;

    if (day === 6 || day === 0) {
      name = null;
    } else {
      if (employeesByGroupShuffledArray.length !== 0) {
        name = employeesByGroupShuffledArray.shift().name;
      } else {
        employeesByGroupShuffledArray = getEmployeesByGroupShuffledArray();
        name = employeesByGroupShuffledArray.shift().name;
      }
    }

    return {
      date: dayMoment.format('YYYY-MM-DD'),
      name: name
    };
  });

  return data;
};

export default getRandomSchedule;
