import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        {/* <Route path='/about' element={<h1>About</h1>} /> */}
        <Route exact path='/projects'  element={<Projects/>} />
        {/* <Route path='/career' element={<h1>Career Experience</h1>} /> */}
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
