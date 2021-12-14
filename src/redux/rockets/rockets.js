import fetchRockets from '../../apiServices/getRocketsApi';

const ROCKET = 'redux/actions/get_rockets';

const rockets = (rockets) => ({
  type: ROCKET,
  payload: rockets,
});

export const getRockets = () => (dispach) => {
  fetchRockets().then((rocket) => {
    dispach(rockets(rocket));
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKET:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
