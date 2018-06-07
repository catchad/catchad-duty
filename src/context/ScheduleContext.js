import React, { Component } from 'react';
import { database } from '../firebase';
import findIndex from 'lodash/findIndex';
import drop from 'lodash/drop';
import moment from 'moment';
import 'moment/locale/zh-tw';

const ScheduleContext = React.createContext();

class ScheduleContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [] };
  }
  componentDidMount() {
    database.ref(`/schedule`).once('value', snapshot => {
      const currentIndex = findIndex(snapshot.val(), {
        date: moment().format('YYYY-MM-DD')
      });
      const slicedData = drop(snapshot.val(), currentIndex);
      this.setState({ schedule: slicedData });
    });
  }
  render() {
    return (
      <ScheduleContext.Provider value={this.state}>
        {this.props.children}
      </ScheduleContext.Provider>
    );
  }
}

export { ScheduleContextProvider, ScheduleContext };
