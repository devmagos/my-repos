import React from 'react';
import './Pagination.css';
 const Pagination = ({reposPerPage, totalRepos, paginate}) => {
if(reposPerPage === !reposPerPage && totalRepos === !totalRepos && paginate === !paginate){
throw new Error("Page Doesn't Exist!")
}

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav className='nav'>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page'>
                    <a onClick={() => paginate(number)} href='#' className='link'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination;