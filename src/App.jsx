import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/MyPosts/MyPosts';
import Dialogs from './components/Dialogs/Dialogs';

import { BrowserRouter, Route } from 'react-router-dom';




function App(props) {


  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>

          <Route exact path="/profile" render={() => <Profile posts = {props.state.profilePage.posts}  dispatch = {props.dispatch} newPostText = {props.state.profilePage.newPostText}/>} />
          <Route exact path="/dialogs" render={() => <Dialogs dialogs = {props.state.messagePage.dialogs}  messages = {props.state.messagePage.messages}/>} />

        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
