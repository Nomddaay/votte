import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;