import React, { useState,useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import axios from 'axios'
import Home from "./Home"
import About from "./About"
import Pokemon from "./Pokemon"
import NavBar from "./NavBar";
import Footer from "./Footer"
import Error from './Error';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results)
    })

    return () => cancel()
  }, [currentPageUrl])

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."
  
  return (
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home pokemon={pokemon} 
          gotoNextPage={gotoNextPage} 
          gotoPrevPage={gotoPrevPage}
          nextPageUrl={nextPageUrl}
          prevPageUrl={prevPageUrl}
          />} 
          />
          <Route path="about" element={<About />} />
          <Route path="pokemon/:name" element={<Pokemon />} />
          <Route path="?" element={<Error />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
