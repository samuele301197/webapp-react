import { useEffect, useState } from 'react';
import axios from 'axios'
import Home from "../src/pages/Home";
import Movies from "../src/pages/Movies";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GuestLayout from './layout/GuestLayout'
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<SingleMovie />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
