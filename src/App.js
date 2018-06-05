import React, { Component } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'react-emotion';
import { messaging } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendTokenToServer from './SendTokenToServer';
import { LoginContextProvider } from './context/LoginContext';

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
        console.log(messaging);
        return messaging.getToken();
      })
      .then(function(token) {
        console.log(token);
        SendTokenToServer(token);
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });
    messaging.onTokenRefresh(function() {
      messaging
        .getToken()
        .then(function(refreshedToken) {
          console.log('Token refreshed.');
          SendTokenToServer(refreshedToken);
        })
        .catch(function(err) {
          console.log('Unable to retrieve refreshed token ', err);
        });
    });

    messaging.onMessage(function(payload) {
      console.log('Message received. ', payload);
      toast(payload.notification.body, {
        position: toast.POSITION.BOTTOM_CENTER
      });
    });
  }

  render() {
    return (
      <Router>
        <LoginContextProvider>
          <Container>
            <ToastContainer />
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
                path="/login"
                render={() => {
                  return <Login />;
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
        </LoginContextProvider>
      </Router>
    );
  }
}

export default App;
