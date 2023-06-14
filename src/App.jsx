import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route exact path='/skills' element={<Skills />} /> */}
        <Route exact path='/projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
