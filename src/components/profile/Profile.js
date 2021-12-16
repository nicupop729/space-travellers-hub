import { useSelector } from 'react-redux';
import Component from './Component';
import './profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const missions = useSelector((state) => state.missionsReducer);
  const activeRockets = rockets.filter((rocket) => rocket.reserved === true);
  const activeMissions = missions.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <div className="Reservations">
      <Component
        reservations={activeMissions}
        object="Missions"
        message="No missions joined"
        type="mission"
      />
      <Component
        reservations={activeRockets}
        object="Rockets"
        message="No rockets reserved"
        type="rocket"
      />
    </div>
  );
};

export default Profile;
