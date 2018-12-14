import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { History } from '../service';

import Home from './home';
import Login from './login';

const App = () => (
    <Router history={History}>
        <Switch>
            <Route exact path="/index" component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
);

export default App;
