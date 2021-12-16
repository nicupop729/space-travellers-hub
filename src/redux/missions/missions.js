import fetchMissions from '../../apiServices/getMissionsApi';

const MISSIONS = 'redux/actions/get_missions';
const JOIN_MISSION = 'redux/actions/join_mission';

const getMissionsAction = (missions) => ({
  type: MISSIONS,
  payload: missions,
});

export const joinMissionAction = (missionID) => ({
  type: JOIN_MISSION,
  payload: missionID,
});

export const getMissions = () => (dispach) => {
  fetchMissions().then((data) => {
    const missions = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    }));
    dispach(getMissionsAction(missions));
  });
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, reserved: !mission.reserved }
        : { ...mission }));
    default:
      return state;
  }
};

export default missionsReducer;
