import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route path='/home' element={<Home />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
