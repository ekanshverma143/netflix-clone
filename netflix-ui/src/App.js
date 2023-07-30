import React from 'react'
import { BrowserRouter, Routes, Route }
          from 'react-router-dom'
import Login from './pages/Login';
import Notflix from './pages/Notflix';
import Signup from "./pages/Signup";
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route exact path="/login" element={<Login/>} />
     <Route exact path="/signup" element={<Signup/>} />
     <Route exact path="/" element={<Notflix/>} />
   </Routes>
   </BrowserRouter>
  );
}
