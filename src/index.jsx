import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';





 let renderEntireTree = () => {
    ReactDOM.render(
      
        <App state = {store.getState()} dispatch = {store.dispatch.bind(store)} store = {store}/>,
        document.getElementById('root')
    );

}

renderEntireTree(store.getState());

store.subscribe(()=> {
  let state = store.getState();
  renderEntireTree(state)
})