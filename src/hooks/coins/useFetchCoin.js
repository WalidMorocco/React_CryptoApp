import useFetch from '../useFetch';

const useFetchCoin = (CoinId) => {
  return useFetch(`/assets/${CoinId}/metrics`);
};

export default useFetchCoin;
