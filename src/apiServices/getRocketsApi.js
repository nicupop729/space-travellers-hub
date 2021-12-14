const GET_ROCKETS_API = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async () => {
  const data = await fetch(GET_ROCKETS_API);
  const dataResult = await data.json();
  return dataResult;
};

export default fetchRockets;
