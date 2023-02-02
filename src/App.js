
import './App.css';
import Navbar from './components/_navbar';
import Navbar2 from './components/_navbar2'
import Home from './components/home'
import HTML from './components/html_css'
import Frame from './components/frame'
import Java from './components/java'
import Reactd from './components/react'
import Noded from './components/node'
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom"
import React from 'react';

function App() {
  return (
    <div   className="App bg-[#28303d]">
      <Navbar2></Navbar2>
      
      
      
    
      

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/html' element={<HTML></HTML>}></Route>
        <Route path='/frame' element={<Frame></Frame>}></Route>
        <Route path='/java' element={<Java></Java>}></Route>
        <Route path='/react' element={<Reactd></Reactd>}></Route>
        <Route path='/node' element={<Noded></Noded>}></Route>
        
      </Routes>
      
      
    </div>
  );
}

export default App;
