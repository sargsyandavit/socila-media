import React from 'react';
import PopUp from './components/PopUp/PopUp';
import logo from './logo.svg';
import './App.css';
import Header from './components/PopUp/Header/Header';

function App() { 
  return (
    <div className="App">
      <Header />
      <PopUp />
      {[1,2,3,4].map(item => (
        <p>{item}</p>
      ))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          logo href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
