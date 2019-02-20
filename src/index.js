import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './App';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
apiKey: "AIzaSyD6iWGIO_A0IHXPdbo2CnkPzv1NYcyIdzA",
authDomain: "vl0514.firebaseapp.com",
databaseURL: "https://vl0514.firebaseio.com",
projectId: "vl0514",
storageBucket: "vl0514.appspot.com",
messagingSenderId: "337704036974"
};
firebase.initializeApp(config);


const routing = (
    <Router>
        <Switch>
            <Route exact path = "/" component={App} />
            <Route component={Notfound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
