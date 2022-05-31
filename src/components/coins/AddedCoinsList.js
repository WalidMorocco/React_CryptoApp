import React from 'react'
import { useSelector } from 'react-redux'

export const AddedCoinsList = () => {
  const coins = useSelector(state => state.coins)

  const renderedCoins = coins?.map(coin => (
    <article className="coin-excerpt" key={coin.id}>
      <h3>{coin.title}</h3>
      <p className="coin-content">{coin.content.substring(0, 100)}</p>
    </article>
  ))

  console.log({});
  return (
    <section className="coins-list">
      <h2>Coins</h2>
      {renderedCoins}
      <h3>Are you sure you want to add this coins to your account?</h3>
    </section>
  )
}