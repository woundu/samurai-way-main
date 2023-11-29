import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';
import MyPosts from './components/Profile/MyPosts/MyPosts';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>

        <Route path = "/profile" component ={MyPosts} />
          <Route path="/dialogs" component={Dialogs} />
          
        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
