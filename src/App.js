import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Trending from './Pages/Trending'
import Error from './Pages/Error'
import Search from './Pages/Search'

//use 3 endpoints from giphy API
//random, trending, maybe search
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/search">Search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/search" element={<Search />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <div></div>
    </Router>
  );
}

export default App;
