import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Notfound from './NotFound'
import MemSize from './Reports/Generic/MemSize'
import RepDailyreport from './Reports/Reps/DailyReport'
import VarRuns from './Reports/Generic/VarRuns'
import * as serviceWorker from './serviceWorker';


  const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/MemSize" component={MemSize} />
        <Route exact path="/TDReport" component={RepDailyreport} />
        <Route exact path="/VarRuns" component={VarRuns} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
