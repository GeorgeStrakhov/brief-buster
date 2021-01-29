import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Setup from './setup';
import Explode from './explode';
import NoMatch from './nomatch';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/explode">
            <Explode />
          </Route>
          <Route exact path="/">
            <Setup />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    );
  }

}

export default App;
