import React from 'react';
import './App.css';
import HooksGenrs from './components/hooks/HooksGenrs/HooksGenrs';
import Header from './components/Header/Header';
// import HooksGenrs from './components/hooks/HooksGenrs/HooksGenrs';

function App() {  
  return (
    <div className="App">
      <Header />
      <HooksGenrs /> 
    </div>
  );
}

export default App;
