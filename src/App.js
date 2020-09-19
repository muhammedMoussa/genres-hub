import React from 'react';
import './App.css';
import { api } from './config';
import List from './components/List';
import Form from './components/Form';
import Post from './components/Post';
// import { Post } from './components/Post';
// @TODO: REFACTOR
function App() {  
  return (
    <div className="App">
      <h1>genres-hub</h1>
      {/* <List /> */}
      <div>
      <h2>Add a new article</h2>
      <Form />
      <h2>API posts</h2>
      <Post />
    </div>
    </div>
  );
}

export default App;
