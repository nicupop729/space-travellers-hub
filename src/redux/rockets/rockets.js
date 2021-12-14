import fetchRockets from '../../apiServices/getRocketsApi';

const ROCKET = 'rocket';

const rockets = (payload) => ({
  type: ROCKET,
  payload,
});

export const getRockets = () => (dispach) => {
  fetchRockets().then((rocket) => {
    dispach(rockets(rocket.data));
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
