import fetchMissions from '../../apiServices/getMissionsApi';

const MISSIONS = 'redux/actions/get_missions';

const missions = (missions) => ({
  type: MISSIONS,
  payload: missions,
});

export const getMissions = () => (dispach) => {
  fetchMissions().then((mission) => {
    dispach(missions(mission));
  });
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
