/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <ul className="Rockets">
      {rockets.map(({
        flickr_images, rocket_name, description, id,
      }) => (
        <Rocket
          key={id}
          flickr_images={flickr_images}
          rocket_name={rocket_name}
          description={description}
        />
      ))}
    </ul>
  );
};

export default Rockets;
