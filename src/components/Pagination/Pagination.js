import React from 'react';
import './Pagination.css';
 const Pagination = ({reposPerPage, totalRepos, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++){
        pageNumbers.push(i);
    }
  return (
    <nav>
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