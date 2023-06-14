// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Temperature from './components/Temperature';
import SearchFilter from './components/SearchFilter';
import Parent from './components/Parent';
import NoPage from './components/NoPage';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';


function App() {



  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/temperature' element={<Temperature />} />
        <Route path='/childtoparent' element={<Parent />} />
        <Route path='/searchfilter' element={<SearchFilter />} />
        <Route path='/form' element={<LoginForm />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </React.Fragment>

  );
}

export default App;
