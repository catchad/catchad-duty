import React, { Component } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
