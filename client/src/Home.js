import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import PokemonList from './PokemonList'

import Pagination from './Pagination';

export default function Home({pokemon, gotoNextPage, gotoPrevPage, nextPageUrl, prevPageUrl}) {
    
    
    return (
        <>
            <PokemonList pokemon={pokemon} />
            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}
