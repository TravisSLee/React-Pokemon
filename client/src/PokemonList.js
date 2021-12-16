import React from 'react'

export default function PokemonList({ pokemon }) {
    
    
    return (
        <div>
            { pokemon.map(p => (
                // <Link >{p.name}</Link>
                <div > {p.name}</div>
            ))}
        </div>
    )
}
