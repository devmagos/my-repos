import React from 'react'
import './Repo.css';


const Repo = ({repos, paginate}) => {

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
               <li key={repo.id} className='repos_display'  class="list-group-item list-group-horizontal-lg">
                <a onClick={() => paginate(repo.id)} href={repo.html_url} className='link'>
                  {repo.name}
                </a>
              </li>
            ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Repo;