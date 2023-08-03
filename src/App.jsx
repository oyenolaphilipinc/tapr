/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const App = () => {
  return(
    <div className="header bg-black overflow-hidden text-white">
      <Navbar />
      <Header />
    </div>
  )
}

export default App;