import React from 'react';
import keycap from '../img/keycap.png'
import brand from '../img/marca.png'

export function Home() {
return (<div className="App">
      <header className="App-header">
        <img src={keycap} className="App-logo" alt="logo" />
        <p>
        <img src={brand} className="App-marca" alt="marca" width="650px"
        height="200px"/>
        </p>
        <a
          className="App-link"
          href="."
          target="_blank"
          rel="noopener noreferrer"
        >
          Nuestra última entrada
        </a>
      </header>
    </div>);
    }