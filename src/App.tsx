import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Menu from './components/Header'
import AboutUs from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
     <Router>
    <div className='flex-col min-h-screen'>
       {/* <nav className="p-4 bg-slate-800 text-white flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to ="/projects">Project</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={
            [<Menu />,
            <AboutUs/>,
            <Projects/>]
            
            } />
          <Route path="/about" element={<AboutUs />} />
          <Route path='/Projects' element={<Projects/>} />
        </Routes>
      <Footer/>
      </div>
      </Router>
    </>
  )
}

export default App
