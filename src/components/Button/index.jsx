import React from 'react'

export const Button = ({ type, event, name }) => {
  return (
    <button type={type} onClick={event}>
      {name}
    </button>
  )
}
