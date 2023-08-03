import React from 'react'
import { BrowserRouter, Routes, Route }
          from 'react-router-dom'
import Login from './pages/Login';
import Notflix from './pages/Notflix';
import Player from './pages/Player';
import Signup from "./pages/Signup";
import Movies from "./pages/Movies"
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route exact path="/login" element={<Login/>} />
     <Route exact path="/signup" element={<Signup/>} />
     <Route exact path="player" element={<Player/>} />
     <Route exact path="/movies" element={<Movies/>} />
     <Route exact path="/" element={<Notflix/>} />
   </Routes>
   </BrowserRouter>
  );
}
