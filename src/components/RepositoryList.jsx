import React from "react"
import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'testes',
    description: 'forms in React',
    link: 'https://github.com'
}

export function RepositoryList() {
    return(
        <section className="Repository-list">
            <h1>Lista de repositorio</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}