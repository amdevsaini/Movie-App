// import React, { useState } from 'react';
// import Header from './components/Header';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Watchlist from './components/Watchlist';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar'
import './App.css';

const App = () => {
  return (
    <div class="flex h-screen">
    <Sidebar/>
    <NavBar/>
</div>
  );
};

export default App;
