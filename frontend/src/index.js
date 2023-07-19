import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './components/context/FirebaseContext';
import { firebase } from "./firebase/config"; 
import { ProvideAuth } from './components/context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <ProvideAuth>
        <App />
      </ProvideAuth>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

