/**
  * The application router
  */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Index } from '../../ui/pages/index';
import { NotFound } from '../../ui/pages/notFound';

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* <IndexRoute component={Index} />
        <Route path="/ayam" />
        <Route path="*" component={NotFound} /> */}
      </Route>
    </Router>,
    document.getElementById('react-root')
  );
});
