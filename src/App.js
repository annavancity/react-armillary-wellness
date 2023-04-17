import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Services from './Services';
import Store from './Store';
import Contact from './Contact';


function App() {
  return <Router>
    <nav>
      <Link className='link' to="/">About</Link>
      <Link className='link' to="/services">Services</Link>
      <Link className='link' to="/store">Shop</Link>
      <Link className='link' to="/contact">Contact</Link>
    </nav>

    <Routes>
      <Route path="/" element={ < About />}/>
      <Route path="/services" element={ < Services />}/>
      <Route path="/store" element={ < Store />}/>
      <Route path="/contact" element={ < Contact />}/>
    </Routes>
  </Router>;
}

export default App;
