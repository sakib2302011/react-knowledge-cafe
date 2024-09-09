import PropTypes from 'prop-types';

const ShowBookmark = ({bookmark}) => {
  const {blog_title} = bookmark;
  return (
    <div className='p-5 mb-4 bg-white rounded-lg'>
      <h3 className='text-lg font-semibold' >{blog_title}</h3>
    </div>
  );
};
ShowBookmark.propTypes = {
  bookmark : PropTypes.object.isRequired
}
export default ShowBookmark;