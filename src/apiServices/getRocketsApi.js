import fetchDataApi from './funcApi';

const ROCKETS_END_POINT = 'rockets';

const fetchRockets = () => fetchDataApi(ROCKETS_END_POINT);

export default fetchRockets;
