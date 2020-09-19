import React from 'react';
import './App.css';
import HooksGenrs from './components/hooks/HooksGenrs/HooksGenrs';
import Header from './components/Header/Header';

function App() {  
  return (
    <div className="app">
      <Header />
      <HooksGenrs /> 
    </div>
  );
}

export default App;
