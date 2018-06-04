import React, { Component } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'react-emotion';
import { messaging } from './firebase';

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const LoadableBackend = Loadable({
  loader: () => import('./pages/Backend'),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends Component {
  componentDidMount() {
    messaging
      .requestPermission()
      .then(function() {
        console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
        return messaging.getToken();
      })
      .then(function(token) {
        console.log(token);
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });

    messaging.onMessage(payload => {
      console.log('onMessage', payload);
    });
  }

  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Home />;
              }}
            />
            <Route
              exact
              path="/backend"
              render={() => {
                return <LoadableBackend />;
              }}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
