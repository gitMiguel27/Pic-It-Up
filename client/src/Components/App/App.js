import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className='app'>
      <Navbar />
      <div className="page-container">
        <div className="content-wrap">
          <Routes>
            <Route exact path='/' element={<Home />}>
            </Route>
            <Route path='/home' element={<Home />}>
            </Route>
            <Route path='/login' element={<Login setUser={setUser}/>}>
            </Route>
            <Route path='/signup' element={<Signup setUser={setUser}/>}>
            </Route>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
