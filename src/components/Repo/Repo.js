import React from 'react'
import './Repo.css';


const Repo = ({repos}) => {

  if(repos === !repos){
    throw new Error("Repo Doesn't Exist!")
    }
  
  return (
    <div className="repo">
      <div className='repo-divs'>
        <h1>OMAKOJI ENEJOH GITHUB PORTFOLIO 🏆</h1>
      </div>
      <div className='repo-divs'>
      <h2>REPOSITORIES LIST 🔥</h2>
          <ul class="list-group">
            {repos.map(repo => (
               <li key={repo.id} className='repos_display'  class="list-group-item list-group-horizontal-lg">{repo.name}</li>
            ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Repo;