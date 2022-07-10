import { useState, useEffect } from "react"
import "../Repos/repos_style.css"


const Repos = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        const getRepos = async () => {
            const response = await fetch('https://api.github.com/users/laraof/repos')
            const repoData = await response.json()

            setRepos(repoData)
        }
        getRepos()
    }, [])

    return (
        <>
        <h2 className="repo-title">Repositórios no Github</h2>
        <div className="map-container">
            {repos.map(data => {
                return(
                    <div className="repo-card">
                        <h4 key={data.id}>
                            {data.name}
                        </h4>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Repos