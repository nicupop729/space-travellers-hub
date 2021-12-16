import PropTypes from 'prop-types';
import './component.css';

const Component = ({ reservations, object }) => (
  <div className="Reservations__div">
    <h1>
      My
      {' '}
      {object}
    </h1>
    {reservations.length ? (
      <ul className="Reservations__div_list">
        {reservations.map((reservation) => (
          <li className="Reservations__div_list_item" key={reservation.id}>
            {reservation.name}
          </li>
        ))}
      </ul>
    ) : (
      <p className="Reservations__div_none">No reservation yet</p>
    )}
  </div>
);

Component.propTypes = {
  reservations: PropTypes.instanceOf(Object).isRequired,
  object: PropTypes.string.isRequired,
};

export default Component;
