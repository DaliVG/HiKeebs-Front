import './App.css';
import './footer.css';
import './aboutus.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { Home } from './pages/Home';
import { AboutUs } from './pages/aboutUs';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/aboutUs" element={<AboutUs />}/>    
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
