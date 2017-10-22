import React from 'react';
import { Route, IndexRoute, hashHistory } from 'react-router';

// -- Import components
import App from './components/app'
import LoginPage from './components/user/login-page';
import SignUp from './components/user/sign-up-page';
import DashBoard from './components/dashboard/dashboard-page';
import NotFound from './components/global/not-found';
import NewEvent from './components/event/new-event';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={LoginPage} />
      <Route path='sign-up' component={SignUp} />
      <Route path='dashboard' component={DashBoard} />
      <Route path='new-event' component={NewEvent} />
      <Route path="*" component={NotFound} />
  </Route>
);
