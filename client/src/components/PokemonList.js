import React from 'react'
import style from './Pokemon.module.css'
import Nav from 'react-bootstrap/Nav';

export default function PokemonList({ pokemon }) {
    
    
    return (
        <div>
            { pokemon.map((p,index) => (
                <Nav.Item>
                    <Nav.Link className={style.name} 
                    href={`/pokemon/${p.name}`}
                    key={index}>{p.name}</Nav.Link>
                </Nav.Item>
            ))}
        </div>
    )
}
