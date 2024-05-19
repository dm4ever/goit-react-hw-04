import React from 'react'
import { useState, useEffect } from 'react'
import { getPhotos } from '../unsplash-api'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import toast, { Toaster } from 'react-hot-toast'
import css from './App.module.css'


function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

   useEffect(() => {
    async function fetchPhoto() {

      try {
        setIsLoad(true);
        setIsError(false);
        const fetch = await getPhotos(searchQuery, page);
        // setPhotos(prevState => [...prevState, fetch]);
        setPhotos(response.data.results);
      } catch {
        toast.error("Error fetching. Please try again!");
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    }
    fetchPhoto();
  }, [searchQuery, page]);

   const handleSearch = async (photo) => {
    setSearchQuery(photo);
    setPage(1);
     setPhotos([]);
     console.log(photo);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <header>
        <SearchBar onSearch={handleSearch} />
        {isError && (<ErrorMessage />)}
      </header>
      <div>
        <Toaster
          containerStyle={{ position: 'relative', }}
          reverseOrder={true} />
        {photos.length > 0 && <ImageGallery data={photos} />}
        {isLoad !== false && (<Loader />)}
        {/* {photos.length > 0 && !isLoad && (<LoadMoreBtn onLoadMore={handleLoadMore} />)} */}
      </div>
    </>
  )
};

export default App
