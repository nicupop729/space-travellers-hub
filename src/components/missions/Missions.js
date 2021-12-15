/* eslint-disable camelcase */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import './missions.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="Missions">
      <table className="Missions__table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        {
          missions.map(({
            mission_id, mission_name, description, reserved = false,
          }) => (
            <tr key={mission_id}>
              <td className="Missions__name"><h1>{ mission_name }</h1></td>
              <td className="Missions__description"><p>{ description }</p></td>
              <td>{ reserved ? (<span className="badge badge--primary">ACTIVE MEMBER</span>) : (<span className="badge badge--secondary">NOT A MEMBER</span>) }</td>
              <td>{ reserved ? (<button type="button" className="app-btn-danger">Leave Mission</button>) : (<button type="button" className="app-btn-ghost">Join Mission</button>) }</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
};

export default Rockets;
