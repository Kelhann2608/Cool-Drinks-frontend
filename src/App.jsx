import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          <Route path="/" exact component={Home} />
          <Route path="/Boissons_chaudes" component={BoissonsChaudes} />
          <Route path="/Boissons_froides" component={BoissonsFroides} />
          <Route path="/Gourmandises" component={Gourmandises} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Admin" component={Admin} />
        </Routes>
        <Admin />
        <BoissonsChaudes />
        <BoissonsFroides />
        <Contact />
        <Gourmandises />
        <Home />
      </BrowserRouter>
    </div>
  );
}
export default App;