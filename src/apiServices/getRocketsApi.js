import axios from 'axios';

const GET_ROCKETS_API = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = () => axios({
  method: 'get',
  url: GET_ROCKETS_API,
});

export default fetchRockets;
