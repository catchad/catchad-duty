import React, { Component } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'react-emotion';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from './context/LoginContext';
import Provider from './Provider';

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
  render() {
    return (
      <Provider>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <LoginContext.Consumer>
                    {({ currentUser }) =>
                      currentUser === null ? (
                        <Redirect to="/login" />
                      ) : (
                        <Home currentUser={currentUser} />
                      )
                    }
                  </LoginContext.Consumer>
                );
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
      </Provider>
    );
  }
}

export default App;
