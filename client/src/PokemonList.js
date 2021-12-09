import React from 'react'
import { Link } from "react-router-dom";

export default function PokemonList({ pokemon }) {
    
    
    return (
        <div>
            { pokemon.map(p => (
                // <Link >{p.name}</Link>
                <div> {p.name}</div>
            ))}
        </div>
    )
}
