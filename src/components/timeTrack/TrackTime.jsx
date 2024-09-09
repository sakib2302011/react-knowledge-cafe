import PropTypes from 'prop-types';
const TrackTime = ({readingTime}) => {
  return (
    <div className="px-12 py-5 mb-6 border-2 border-violet-600 rounded-lg bg-violet-200">
      <h2 className="text-2xl font-bold text-violet-600">Spent time on read: {readingTime} min</h2>
    </div>
  );
};

TrackTime.propTypes = {
  readingTime: PropTypes.number.isRequired
}
export default TrackTime;