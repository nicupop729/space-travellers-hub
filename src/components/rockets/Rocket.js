import PropTypes from 'prop-types';
import RocketBtn from '../Btns/RocketBtn';
import './rocket.css';

const Rocket = ({
  image, name, description, reserved, id,
}) => (
  <li className="Rocket">
    <img className="Rocket__img" src={image} alt="rocket-img" />
    <div className="Rocket__div">
      <h1 className="Rocket__name">{name}</h1>
      <p className="Rocket__description">
        {reserved && <span className="Rocket__reserved_badge">Reserved</span>}
        {description}
      </p>
      {reserved ? (
        <RocketBtn
          className="Rocket__btn_Cancel"
          text="Cancel Reservation"
          id={id}
        />
      ) : (
        <RocketBtn
          className="Rocket__btn_Reserve"
          text="Reserve Rocket"
          id={id}
        />
      )}
    </div>
  </li>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
