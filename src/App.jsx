import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
        <>
        <Navbar name="Sreemanth Jasti"/>
        <Hero/>
        <About/>
        <Experience/>
        <Education/>
        <Contact/>
        <Footer/>
        </>
  );
}

export default App;
