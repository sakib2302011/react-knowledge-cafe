import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/bookmarks/Bookmark'
import Header from './components/header/header'
import TrackTime from './components/timeTrack/TrackTime'
import './index.css'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  
  const handleAddToBookmarks = blog => {
    setBookmarks(previousBookmarks => [...previousBookmarks, blog])
  }
  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime+time);
    const newBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(newBookMarks);
  }
  return (
    <>
      <div className='md:max-w-7xl mx-auto'>
        <Header></Header>
        <div className='flex justify-between gap-6'>
          <div className='w-2/3'>
            <Blogs 
              handleAddToBookmarks={handleAddToBookmarks}
              handleMarkAsRead={handleMarkAsRead}
            ></Blogs>
          </div>
          
          <div className='w-1/3 '>
            <TrackTime
              readingTime={readingTime}
            ></TrackTime>
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
