import React from 'react';
import './App.css';
import Header from "./components/Header.jsx"
import Navbar from "./components/Navbar.jsx"
import Profile from "./components/Profile.jsx"
import Posts from "./components/posts.jsx"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <Posts />
    </div>
  );
}

export default App;
