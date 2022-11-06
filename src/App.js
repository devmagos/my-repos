import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link to="../Home/Home" className='links'>Home</Link>
        <Link to="../Repo/Repo" className='links'>Repo</Link>
      </nav>
      <div className='portfolio'>
      <div className='repo-divs'>
        <h1>
      GITHUB PORTFOLIO 🏆
        </h1>
      </div>

      <div className='repo-divs'>
        <h2>
          REPO LIST 🔥
        </h2>
      </div>
      </div>
    </div>
  );
}

export default App;

