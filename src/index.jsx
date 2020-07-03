import React from 'react';
import { render } from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Providers from './providers/Providers';

import AuthLayout from './layout/AuthLayout';
import DashboardLayout from './layout/DashboardLayout';
import './assets/scss/main.scss';

render(
  <Providers>
    <Switch>
      <Route path="/auth" component={AuthLayout} />
      <Route path="/admin" component={DashboardLayout} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </Providers>,
  document.getElementById('root')
);
