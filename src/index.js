import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './App';
import All from './All';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Switch>
            <Route exact path = "/" component={App} />
            <Route path = '/viewAll' component={All} />
            <Route component={Notfound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
