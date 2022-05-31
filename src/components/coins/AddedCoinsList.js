import { useSelector } from 'react-redux'
import React, { Component } from 'react';
import { CSVLink } from "react-csv";

export const AddedCoinsList = () => {
  const coins = useSelector(state => state.coin)

  console.log(coins)
  const renderedCoins = coins.cartItems.map(coin => (
    <article className="coin-excerpt" key={coin.id}>
      <h3>{coin.name}</h3>
      <p>{coin.market_data.price_usd}</p>
    </article>
  ))

  return (
    <section className="post-list">
      <h2>Coins</h2>
      <h3>{renderedCoins}</h3>
    </section>
  )
}