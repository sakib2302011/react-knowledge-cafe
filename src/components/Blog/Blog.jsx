import { FaRegBookmark } from "react-icons/fa6";
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {blog_title, blog_img, author, author_img, posted_date, reading_time , hashtags } = blog;
  return (
    <div className="container mx-auto border-b-2 me-8 mb-10">
      <div className="mb-10 max-w-full">
        <img className="w-full h-auto rounded-lg mb-8" src={blog_img} alt={blog_title} />
        <div className='flex items-center justify-between mb-4'>
          <div className='flex gap-6 items-center'>
            <div>
              <img className='w-[60px] h-[60px]' src={author_img} alt="" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{author}</h2>
              <h4 className="text-base font-semibold text-slate-500">{posted_date}</h4>
            </div>
          </div>
          <div className="flex items-center gap-3 me-3">
            <span className="text-base font-semibold text-slate-500">{reading_time} min read </span>
            <button><FaRegBookmark className="text-slate-500"></FaRegBookmark></button>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">{blog_title}</h1>
        <p className="mb-5">
          {
            hashtags.map((hash, index) => <a key={index} className="text-base text-slate-400" href="">  {hash}    </a> )
          }
        </p>
        <a className="text-blue-600 font-semibold underline" href="">Mark as read</a>
      </div>
    </div>



  );
};

Blog.propTypes  ={
  blog: PropTypes.object
}
export default Blog;