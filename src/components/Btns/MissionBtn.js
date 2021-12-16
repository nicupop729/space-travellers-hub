import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMissionAction } from '../../redux/missions/missions';

const MissionBtn = ({ className, text, id }) => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => dispatch(joinMissionAction(id))}
      className={className}
    >
      {text}
    </button>
  );
};

MissionBtn.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MissionBtn;
