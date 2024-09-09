import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/bookmarks/Bookmark'
import Header from './components/header/header'
import TrackTime from './components/timeTrack/TrackTime'
import './index.css'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    setBookmarks(previousBookmarks => [...previousBookmarks, blog])
  }
  return (
    <>
      <div className='md:max-w-7xl mx-auto'>
        <Header></Header>
        <div className='flex justify-between gap-6'>
          <div className='w-2/3'>
            <Blogs 
              handleAddToBookmarks={handleAddToBookmarks}
            ></Blogs>
          </div>
          
          <div className='w-1/3 '>
            <TrackTime></TrackTime>
            <Bookmark
              bookmarks={bookmarks}
            ></Bookmark>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
