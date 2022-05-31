import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { coinAdded } from '../../coinsSlice'

export const AddCoin = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSaveCoinClicked = () => {
    if (title && content) {
      dispatch(
        coinAdded({
          id: nanoid(),
          title,
          content
        })
      )

      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Coin</h2>
      <form>
        {/* omit form inputs */}
        <button type="button" onClick={onSaveCoinClicked}>
          Save Coin
        </button>
      </form>
    </section>
  )
}