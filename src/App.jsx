import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Projects'
import ToDo from './pages/ToDo';
import CV from './pages/CV';
import Contact from './pages/ContactMe';
import NavBar from './components/navbar'
import LinksBar from './components/linksbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <NavBar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/cv" element={<CV />} />
            {/* <Route path="/todo" element={<ToDo />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <LinksBar />
      </div>
    </Router>
  )
}

export default App;
