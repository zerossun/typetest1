import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Start from './pages/Start';
import Test from './pages/Test';
import Result from './pages/Result';
import Outcome1 from './pages/outcome/Outcome1';
import Outcome2 from './pages/outcome/Outcome2';
import Outcome3 from './pages/outcome/Outcome3';
import Outcome4 from './pages/outcome/Outcome4';
import Outcome5 from './pages/outcome/Outcome5';
import "@/../../src/asset/scss/style.scss"
import "@/../../src/asset/scss/reset.scss"
import logo from '../src/asset/image/logo.png'
import '../src/App.css'
function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(()=> {
    setVh()

    function  onResize(){
      setVh()
    }

    window.addEventListener('resize',onResize)
  },[])


  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Start />}></Route>
    <Route path="/Test" element={<Test />}></Route>
    <Route path="/Result" element={<Result />}></Route>
    <Route path="/Outcome1" element={<Outcome1 />}></Route>
    <Route path="/Outcome2" element={<Outcome2 />}></Route>
    <Route path="/Outcome3" element={<Outcome3 />}></Route>
    <Route path="/Outcome4" element={<Outcome4 />}></Route>
    <Route path="/Outcome5" element={<Outcome5 />}></Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
