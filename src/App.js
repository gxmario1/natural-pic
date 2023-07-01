import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Context from './Context'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favs from './pages/Favoritos'
import './App.css'


function App() {
  const [images, setImages] = useState([])
  const defaultEndpoint = '/fotos.json'

  const galleryImages = async() => {
    const response = await fetch(defaultEndpoint);
    const data = await response.json();
    let filteredData = data.photos.map((e) => ({
      id: e.id,
      src: e.src.medium,
      desc: e.alt,
      favourite: false
    }));
    setImages(filteredData);
  }

  useEffect(() => {
    galleryImages()
  }, [])
  
  return (
    <div className='App'>
      <Context.Provider value={{images, setImages}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favs' element={<Favs />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;