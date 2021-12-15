import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocketAction } from '../../redux/rockets/rockets';
import './rocket.css';

const Rocket = ({
  image, name, description, reserved, id,
}) => {
  const dispatch = useDispatch();

  return (
    <li className="Rocket">
      <img className="Rocket__img" src={image} alt="rocket-img" />
      <div className="Rocket__div">
        <h1 className="Rocket__name">{name}</h1>
        <p className="Rocket__description">
          {reserved && <span className="Rocket__reserved_badge">Reserved</span>}
          {description}
        </p>
        {reserved ? (
          <button
            type="button"
            onClick={() => dispatch(reserveRocketAction(id))}
            className="Rocket__btn_Cancel"
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(reserveRocketAction(id))}
            className="Rocket__btn_Reserve"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
