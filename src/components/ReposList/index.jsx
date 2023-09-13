import { useEffect, useState } from "react"

import styles from './RepoList.module.css'

// Vai criar uma lista dos repositórios meu
const ReposList = ({ nome }) =>
{   
    // Criando o estado do Array que vai conter o nome dos projetos
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${nome}/repos`)
        .then(function(resposta)
        {
            return resposta.json()
        })
        .then(function(json)
        {
            setRepos(json)
        })
    }, [nome])

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>linguagem:</b> {repositorio.language}
                        </div>
                        <div className={styles.itemLink}>
                            <a target="_blank" href={repositorio.html_url}>Visitar no GitHub</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ReposList