import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SwitchContainer from './SwitchContainer';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <ul className="nav">
        <li><Link to="/Page1">Page1</Link></li>
        <li><Link to="/Page2">Page2</Link></li>
        <li><Link to="/Page3">Page3</Link></li>
      </ul>
      <SwitchContainer>
        <Route path='/Page1' component={Page1} />
        <Route path='/Page2' component={Page2} />
        <Route path='/Page3' component={Page3} />
      </SwitchContainer>
    </Router>
  );
}

export default App;
