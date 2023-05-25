import './css/App.css';
import './css/footer.css';
import './css/aboutus.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { Home } from './pages/Home';
import { AboutUs } from './pages/aboutUs';
import { Keycaps } from './pages/keycaps';
import { KeycapDetails } from './pages/Details';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth } from './components/login';
import { RegisterForm } from './components/register';
import { MyCart } from './components/cart';

function App() {
  return (
    <Router>
      <Header className='App-header'/>
      <main>
        <Routes>
          <Route exact path="keycaps/:sculptId" element={<KeycapDetails />}/>
          <Route path="/login" element={<Auth />}/>  
          <Route path="/cart" element={<MyCart />}/>  

          <Route path="/register" element={<RegisterForm />}/>
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
