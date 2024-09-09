import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmarks, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=> {
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))

  }, [])
  return (
    <div>
      {
        blogs.map(blog => <Blog 
          key={blog.id} 
          blog={blog}
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog> )
      }
    </div>
  );
};
Blogs.propTypes ={
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}
export default Blogs;