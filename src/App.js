import React from 'react';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Genr from './components/hooks/Genr/Genr';
import HooksGenrs from './components/hooks/HooksGenrs/HooksGenrs';
import './App.css';

function App() {  
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <HooksGenrs />
          </Route>
          <Route path="/genr/:id">
            <Genr />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
