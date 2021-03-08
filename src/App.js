import React from 'react';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/services.js';
import Products from './components/pages/products';
import SignUp from './components/pages/signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;