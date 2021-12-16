import PropTypes from 'prop-types';
import MissionBtn from '../Btns/MissionBtn';
import RocketBtn from '../Btns/RocketBtn';
import './component.css';

const Component = ({
  reservations, object, message, type,
}) => (
  <div className="Reservations__div">
    <h1>
      My
      {object}
    </h1>
    {reservations.length ? (
      <ul className="Reservations__div_list">
        {reservations.map(({
          name, id, urlWiki, urlOwn,
        }) => (
          <li className="Reservations__div_list_item" key={id}>
            <h2 className="Reservations__div_list_item_name">
              {name}
              {' '}
              -
              {' '}
              {urlWiki && <a href={urlWiki} target="_blank" rel="noreferrer">Wiki</a>}
              {' '}
              -
              {' '}
              {urlOwn && <a href={urlOwn} target="_blank" rel="noreferrer">Own Site</a>}
              -
              {' '}
            </h2>
            {type === 'mission' ? (
              <MissionBtn
                className="app-btn-danger"
                text="Leave Mission"
                id={id}
              />
            ) : (
              <RocketBtn
                className="Rocket__btn_Cancel"
                text="Cancel Reservation"
                id={id}
              />
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p className="Reservations__div_none">{message}</p>
    )}
  </div>
);

Component.propTypes = {
  reservations: PropTypes.instanceOf(Object).isRequired,
  object: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Component;
