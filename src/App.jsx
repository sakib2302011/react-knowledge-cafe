import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/bookmarks/Bookmark'
import Header from './components/header/header'
import TrackTime from './components/timeTrack/TrackTime'
import './index.css'

function App() {
  

  return (
    <>
      <div className='md:max-w-7xl mx-auto'>
        <Header></Header>
        <div className='flex justify-between'>
          <div className='w-2/3'>
            <Blogs ></Blogs>
          </div>
          
          <div className='w-1/3'>
            <TrackTime></TrackTime>
            <Bookmark></Bookmark>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
