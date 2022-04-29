import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './App.css';

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route exact path='/' element={<Home />}>
            </Route>
            <Route path='/home' element={<Home />}>
            </Route>
            <Route path='/login' element={<Login />}>
            </Route>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
