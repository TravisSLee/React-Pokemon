import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Berries from "./components/BerriesList"
import Pokemon from "./components/Pokemon"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Error from './components/Error';


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
          <Route path="berries" element={<Berries
           url={currentPageUrl}           
           loading={loading} 
           setLoading={setLoading}
           />} 
          />
          <Route path="about" element={<About />} />
          <Route path="pokemon/:name" element={<Pokemon url={currentPageUrl} 
          loading={loading} 
          setLoading={setLoading}
          />} 
          />
          <Route element={<Error />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
