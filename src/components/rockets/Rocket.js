/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import './rocket.css';

const Rocket = ({
  flickr_images,
  rocket_name,
  description,
  reserved = false,
}) => (
  <li className="Rocket">
    <img className="Rocket__img" src={flickr_images[0]} alt="rocket-img" />
    <div className="Rocket__div">
      <h1 className="Rocket__name">{rocket_name}</h1>
      <p className="Rocket__description">
        {reserved ? <span className="Rocket__reserved">Reserved</span> : null}
        {description}
      </p>
      {reserved ? (
        <button type="button" className="Rocket__btn_Cancel">
          Cancel Reservation
        </button>
      ) : (
        <button type="button" className="Rocket__btn_Reserve">
          Reserve Rocket
        </button>
      )}
    </div>
  </li>
);

Rocket.propTypes = {
  rocket_name: PropTypes.string.isRequired,
  flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

Rocket.default = {
  reserved: true,
};

export default Rocket;
