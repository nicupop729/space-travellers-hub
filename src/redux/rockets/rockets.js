import fetchRockets from '../../apiServices/getRocketsApi';

const ROCKET = 'redux/actions/get_rockets';
const RESERVE_ROCKET = 'redux/actions/reserve_rockets';

const getRocketsAction = (rockets) => ({
  type: ROCKET,
  payload: rockets,
});

export const reserveRocketAction = (rocketID) => ({
  type: RESERVE_ROCKET,
  payload: rocketID,
});

export const getRockets = () => (dispach) => {
  fetchRockets().then((data) => {
    const rockets = data.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      urlWiki: rocket.wikipedia,
      reserved: false,
    }));
    dispach(getRocketsAction(rockets));
  });
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => (rocket.id === action.payload
        ? { ...rocket, reserved: !rocket.reserved } : { ...rocket }));
    default:
      return state;
  }
};

export default rocketsReducer;
