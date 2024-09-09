import PropTypes from 'prop-types';
import ShowBookmark from './ShowBookmark';
const Bookmark = ({bookmarks}) => {
  return (
    <div className="p-8 bg-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Blogs: {bookmarks.length} </h2>
      <div>
        {
          bookmarks.map((bookmark, index) => <ShowBookmark key={index} bookmark={bookmark} ></ShowBookmark>)
        }
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired
}
export default Bookmark;