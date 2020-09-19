import React from 'react';
import './App.css';
import HooksGenrs from './components/hooks/HooksGenrs/HooksGenrs';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Genr from './components/hooks/Genr/Genr';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

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
