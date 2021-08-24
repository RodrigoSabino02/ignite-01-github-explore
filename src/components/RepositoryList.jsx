import React, { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    // consumindo a api do git
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[]);

    return(
        <section className="Repository-list">
            <h1>Lista de repositorio</h1>

            <ul>
                {repositories.map(repository => {
                    <RepositoryItem repository={repository} />
                })}
            </ul>
        </section>
    )
}