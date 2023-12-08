
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import Navbar from './Components/Navbar';
import Themes from './Components/Themes';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Themes/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
