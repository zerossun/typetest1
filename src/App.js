import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import Start from './pages/Start';
import Test from './pages/Test';
import Result from './pages/Result';
import "@/../../src/asset/scss/style.scss"
import "@/../../src/asset/scss/reset.scss"
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
  </Routes>
</BrowserRouter>
  );
}

export default App;
