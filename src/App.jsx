
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Main Components/Header/Header'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Welcome from './Pages/Welcome/Welcome';
import Landpage from './Pages/Landpage/Landpage';


function App() {
  const scrollToSection = (sectionId) => {
    const target = document.querySelector(`#${sectionId}`);
    target.scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    
    <div className="App">
      <Header scrollToSection= {scrollToSection}/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/landing" element={<Landpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
