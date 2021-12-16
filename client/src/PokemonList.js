import React from 'react'
import style from './Pokemon.module.css'
import Nav from 'react-bootstrap/Nav';

export default function PokemonList({ pokemon }) {
    
    
    return (
        <div>
            { pokemon.map(p => (
                <Nav.Item>
                    <Nav.Link className={style.name} 
                    href={`/pokemon/${p.name}`}
                    key={p.name}>{p.name}</Nav.Link>
                </Nav.Item>
            ))}
        </div>
    )
}
