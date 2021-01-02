import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Profile from "./components/Profile/Profile.jsx"
import Dialogs from './components/Dialogs/Dialogs.jsx'
import News from './components/News/News.jsx'
import {BrowserRouter, Route} from 'react-router-dom'
import RightNavbar from "./components/Navbar/Right/RightNavbar";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <RightNavbar />

        <div className='app-wrapper-content'>
        <Route path='/news' render={ () => <News/> }/>
        <Route path='/profile' render={ () => <Profile /> } />
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>

        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
