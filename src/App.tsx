import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <ul className="nav">
        <li><a href="/Page1">Page1</a></li>
        <li><a href="/Page2">Page2</a></li>
        <li><a href="/Page3">Page3</a></li>
      </ul>
      <Switch>
        <Route path='/Page1' component={Page1} />
        <Route path='/Page2' component={Page2} />
        <Route path='/Page3' component={Page3} />
      </Switch>
    </Router>
  );
}

export default App;
