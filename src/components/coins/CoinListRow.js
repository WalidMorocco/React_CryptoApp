import React from 'react';
import Card from '../Card';
import { Thumbnail } from '../Thumbnail';
import { Link } from 'react-router-dom';

export const CoinListRow = ({ coin }) => {
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
      }}
    >
      {/* <Thumbnail description={coin.description} image={coin.image} /> */}
      <Link key={coin.id} to={`${coin.id}`}>
        {coin.name}
        
      </Link>
      <hr />
      <p>${coin.metrics.market_data.price_usd}</p>
    </Card>
  );
};
