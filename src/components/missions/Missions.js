import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/missions/missions';
import MissionBtn from '../Btns/MissionBtn';
import './missions.css';

let loadOance = false;

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (!loadOance) {
      dispatch(getMissions());
      loadOance = true;
    }
  }, [dispatch]);

  return (
    <div className="Missions">
      <table className="Missions__table">
        <thead>
          <tr>
            <th>
              <h1>Mission</h1>
            </th>
            <th>
              <h1>Description</h1>
            </th>
            <th>
              <h1>Status</h1>
            </th>
            <th>
              <h1>Join</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map(({
            id, name, description, reserved,
          }) => (
            <tr key={id}>
              <td className="Missions__name">
                <h1>{name}</h1>
              </td>
              <td className="Missions__description">
                <p>{description}</p>
              </td>
              <td>
                {reserved ? (
                  <span className="badge badge--primary">ACTIVE MEMBER</span>
                ) : (
                  <span className="badge badge--secondary">NOT A MEMBER</span>
                )}
              </td>
              <td>
                {reserved ? (
                  <MissionBtn className="app-btn-danger" id={id} text="Leave Mission" />
                ) : (
                  <MissionBtn className="app-btn-ghost" id={id} text="Join Mission" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
