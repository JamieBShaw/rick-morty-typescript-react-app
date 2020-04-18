import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/navigationBar/NavBar';
import Home from './components/home/Home';
import Episodes from './components/episodes/Episodes';
import Characters from './components/characters/Characters';
import Locations from './components/locations/Locations';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/episodes" component={Episodes} />
      <Route exact path="/characters" component={Characters} />
      <Route exact path="/locations" component={Locations} />
    </Router>
  );
};

export default App;
