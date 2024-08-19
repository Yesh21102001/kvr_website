import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import GalleryMenu from "./Components/GalleryMenu"
import GallerySuppliers from "./Components/GallerySuppliers"
import GalleryCatering from "./Components/GalleryCatering"
import GalleryWedding from "./Components/GalleryWedding";


import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const categoryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToCategory = () => {
    categoryRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (<>
  <BrowserRouter>
  <Header scrollToAbout={scrollToAbout} scrollToCategory={scrollToCategory} scrollToContact={scrollToContact}/>
      <Routes>
        <Route path="/" element={<Home aboutRef={aboutRef} categoryRef={categoryRef} contactRef={contactRef} />} />
      <Route path='/GalleryMenu' element={<GalleryMenu/>}/>
      <Route path='/GallerySuppliers' element={<GallerySuppliers/>}/>
      <Route path='/GalleryWedding' element={<GalleryWedding/>}/>
      <Route path='/GalleryCatering' element={<GalleryCatering/>}/>
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
