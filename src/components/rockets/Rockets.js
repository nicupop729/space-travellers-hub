import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  // eslint-disable-next-line no-unused-vars
  const rockets = useSelector((state) => state.rockets);
  const dispach = useDispatch();
  useEffect(() => {
    dispach(getRockets());
  }, []);

  console.log(rockets);

  return <h1>Under Constructions - Rockets</h1>;
};

export default Rockets;
