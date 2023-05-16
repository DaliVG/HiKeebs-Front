import keycap from './img/keycap.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
