import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import HomePage from "./pages/homepage/HomePage";


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home_page' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
