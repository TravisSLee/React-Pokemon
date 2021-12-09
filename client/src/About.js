import React from 'react'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <main>
                <h2>Why chose PokeLearner?</h2>
                <p>
                PokeLearner is the World's Number 1 place to learn pokemon!
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}
