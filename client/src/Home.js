import React from 'react'
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import Container from 'react-bootstrap/Container';
import style from './app.module.css'

export default function Home({pokemon, gotoNextPage, gotoPrevPage, nextPageUrl, prevPageUrl}) {
    
    
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
