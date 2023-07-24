
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './Main Components/Header/Header'
import Landpage from './Pages/Landpage/Landpage'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


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
        <Route path="/" element={<Landpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
