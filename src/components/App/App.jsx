import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <header>
            <form>
                <input
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
      <div>
        <SearchBar />
        <ImageGallery />
        <LoadMoreBtn />
      </div>
    </>
  )
};

export default App
