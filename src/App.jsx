import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import BoissonsChaudes from './components/BoissonsChaudes';
import BoissonsFroides from './components/BoissonsFroides';
import Gourmandises from './components/Gourmandises';
import Admin from './components/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes className='navbar'>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/Boissons_chaudes" element={<BoissonsChaudes />} />
          <Route path="/Boissons_froides" element={<BoissonsFroides />} />
          <Route path="/Gourmandises" element={<Gourmandises />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}
export default App;