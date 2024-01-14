import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [beMessage, setBeMessage] = useState('no response');

  useEffect(() => {
    axios.get(`http://localhost:3030/test`, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }) 
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {beMessage}
        </a>
      </header>
    </div>
  );
}

export default App;
