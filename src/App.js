import React from 'react';
import './App.css';
import Formulaire from './composant/Formulaire';
import {Provider} from 'react-redux';
import store from './store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Formulaire />
      </Provider>
    </div>
    
  );
}



export default App;
