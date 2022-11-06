import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './components/Nav/Nav.js';
import Repo from './components/Repo/Repo.js'
import Pagination from './components/Pagination/Pagination.js';


function App() {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);

  useEffect(() => {
    axios.get('https://api.github.com/users/ernestmoi/repos')
    .then(response => {
      console.log(response)
      setRepos(response.data)
    })
    .catch(error => console.log(error))
  }, [])
  
// Get Current Posts
const indexOfLastRepo = currentPage * reposPerPage;
const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);


// CURRENT PAGE
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (

    <div className="App">
      <Nav />
      <div className='portfolio'>
        <Repo repos={currentRepos}  />
        <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default App;
