import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from "./routes/Users";
import Day1 from "./routes/day1";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/users" component={Users} />
        <Route path="/day1" component={Day1} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
