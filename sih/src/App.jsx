import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// pages routes
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
// pages Routes ends


// portals routes

// portals routes ends

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
