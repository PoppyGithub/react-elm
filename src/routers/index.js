import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { History } from '../service';

import Home from './home';

const App = () => (
    <Router history={History}>
        <Switch>
            <Route exact path="/index" component={Home} />
        </Switch>
    </Router>
);

export default App;
