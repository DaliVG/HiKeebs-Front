import React from 'react';
import keycap from '../img/keycap.png'

export function Home() {
return (<div className="App">
      <header className="App-header">
        <img src={keycap} className="App-logo" alt="logo" />
        <p>
          Hi-Keebs
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuestra última entrada
        </a>
      </header>
    </div>);
    }