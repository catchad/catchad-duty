import React, { Component } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import styled from 'react-emotion';

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
