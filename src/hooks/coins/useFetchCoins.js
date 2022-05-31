import useFetch from '../useFetch';

const useFetchCoins = () => {
  return useFetch('/assets');
};

export default useFetchCoins;
