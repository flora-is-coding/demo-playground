import './App.css';
import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './components/counter/counter';
import RandomAPI from './components/random-api/random-api';
import Palidrome from './components/palindrome/palindrome';
import CardPayment from './components/card-payment/card-payment';
import CardList from './components/card-payment/card-list';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';

function App() {
  
  return (
    <div className="App">
      <div className='body'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='counter' element={<Counter />} />
          <Route path='randomAPI' element={<RandomAPI />} />
          <Route path='palindrome' element={<Palidrome />} />
          <Route path='card' element={<CardPayment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
