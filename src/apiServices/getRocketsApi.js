import GET_DATA_API from './urlApi';

const ROCKETS_END_POINT = 'rockets';

const fetchRockets = async () => {
  const data = await fetch(`${GET_DATA_API}${ROCKETS_END_POINT}`);
  const dataResult = await data.json();
  return dataResult;
};

export default fetchRockets;
