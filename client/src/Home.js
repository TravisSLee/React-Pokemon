import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import Container from 'react-bootstrap/Container';
import style from './app.module.css'

export default function Home({loading, setLoading ,currentPageUrl, setCurrentPageUrl}) {
    const [pokemon, setPokemon] = useState([])
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()

    useEffect(() => {
        setLoading(true)
        const getMons = async () =>{
          try {
            const res = await axios.get(currentPageUrl)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results)
            setLoading(false)
          } catch (e) {
            console.log(e);
          }
        }
        getMons()
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
            <Container className={style.container}>
                <PokemonList pokemon={pokemon} />
                <Pagination
                    gotoNextPage={nextPageUrl ? gotoNextPage : null}
                    gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
                />

            </Container>
        </>
    )
}
