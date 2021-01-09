import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="search" style={{backgroundColor: 'red'}}>search</div>
      <div className="categories" style={{backgroundColor: 'blue'}}>menu</div>
      <div className="sidebar" style={{backgroundColor: 'magenta'}}>copyright</div>
      <div className="content" style={{backgroundColor: 'green'}}>content</div>
    </div>
  );
}

export default App;
