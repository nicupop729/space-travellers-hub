import GET_DATA_API from './urlApi';

const MISSIONS_END_POINT = 'missions';

const fetchMissions = async () => {
  const data = await fetch(`${GET_DATA_API}${MISSIONS_END_POINT}`);
  const dataResult = await data.json();
  return dataResult;
};

export default fetchMissions;
