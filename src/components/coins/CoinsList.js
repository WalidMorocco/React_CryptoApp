import React, { useContext } from 'react';
import useFetchCoins from '../../hooks/coins/useFetchCoins';
import Spinner from '../Spinner';
import { CoinListRow } from './CoinListRow';
import { ThemeContext } from '../../context/themeContext';

const CoinsList = () => {
  const { data: coins, loading, error } = useFetchCoins();
  const { theme } = useContext(ThemeContext);

  if (loading) return <Spinner />;

  
  if (error) {
    return <p>There was an error</p>;
  }

  return (
    <div className="coin-container" style={({ backgroundColor: theme.background, color: theme.foreground })}>
      {coins.data.length > 0 &&
        coins.data.map((coin) => {
          console.log(coin.id)
          return <CoinListRow key={coin.id} coin={coin} />;
        })}
    </div>
  );
};

export default CoinsList;
