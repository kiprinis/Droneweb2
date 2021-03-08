import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hardware from './components/pages/hardware.js';
import Software from './components/pages/software';
import SignUp from './components/pages/signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hardware' component={Hardware} />
          <Route path='/software' component={Software} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;