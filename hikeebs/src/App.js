import './css/App.css';
import './css/footer.css';
import './css/aboutus.css';
import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { Home } from './pages/Home';
import { AboutUs } from './pages/aboutUs';
import { Keycaps } from './pages/keycaps';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header className='App-header'/>
      <main>
        <Routes>
        <Route path="/keycaps" element={<Keycaps />}/>
          <Route path="/aboutUs" element={<AboutUs />}/>    
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
