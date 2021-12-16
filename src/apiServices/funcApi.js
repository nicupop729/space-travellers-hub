const GET_DATA_API = 'https://api.spacexdata.com/v3/';

const fetchDataApi = async (endPoint) => {
  const data = await fetch(`${GET_DATA_API}${endPoint}`);
  const dataResult = await data.json();
  return dataResult;
};

export default fetchDataApi;
