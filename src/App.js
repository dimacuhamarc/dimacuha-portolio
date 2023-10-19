import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ProjectsWeb, ProjectsDesign }from './pages/Projects';
import { Footer } from './components/Footer';
import Contact from './pages/Contact';
import AutoScroll from './utils/AutoScroll';
import Career from './pages/Career';

function App() {
  return (
    <div className='app select-none'>
      <AutoScroll />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        {/* <Route path='/about' element={<h1>About</h1>} /> */}
        <Route exact path='/web-development'  element={<ProjectsWeb/>} />
        <Route exact path='/multimedia'  element={<ProjectsDesign/>} />
        <Route exact path='/contact'  element={<Contact/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
