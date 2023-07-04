import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import HomePage from "./pages/homepage/HomePage";
import Songs from "./pages/songs/Songs";
import './App.css';
import ScrollToTop from "./scripts/ScrollToTop";


function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home_page' element={<HomePage/>}/>
          <Route path="/songs" element={<Songs/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
