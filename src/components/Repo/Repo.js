import React from 'react'
// import { useState } from 'react';
import './Repo.css';


const Repo = ({repos}) => {
  // const [reposPerPage, setReposPerPage] = useState(5);
  
  return (
    <div className="repo">
      <div className='repo-divs'>
        <h1>OMAKOJI ENEJOH 🏆</h1>
      </div>
      <div className='repo-divs'>
      <h2>MY GITHUB REPOSITORIES LIST 🔥</h2>
          <ul>
            {repos.map(repo => (
               <li key={repo.id} className='repos_display'>{repo.name}</li>
            ))
            }
          </ul>
      </div>
    </div>
  )
}

export default Repo;