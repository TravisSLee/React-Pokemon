import React, { useState,useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Pokemon from "./Pokemon"
import NavBar from "./NavBar";
import Footer from "./Footer"
import Error from './Error';


function App() {
  
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  
  const [loading, setLoading] = useState(true)

  
  return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home
          currentPageUrl={currentPageUrl} 
          setCurrentPageUrl={setCurrentPageUrl}
          loading={loading} 
          setLoading={setLoading}
          />} 
          />
          <Route path="about" element={<About />} />
          <Route path="pokemon/:name" element={<Pokemon url={currentPageUrl} 
          />} 
          />
          <Route element={<Error />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
