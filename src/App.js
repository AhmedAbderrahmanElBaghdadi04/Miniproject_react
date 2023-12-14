import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Popular from './Components/Popular/Popular';
import Offers from './Components/Offers/Offers';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import SignInForm from './Components/SignInForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Home />
      <Popular/> 
      <Offers />
      <About />
      <Blog/>
      <Footer />


      
        <Routes>
          <Route path="/login" element={<SignInForm/>} />
          <Route path="/" element={<Home/>} />
          <Route path='/footer' element={<Footer/>} />
        </Routes>
      

      </>
    </div>
  );
}

export default App;
