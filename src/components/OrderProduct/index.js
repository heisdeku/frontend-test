import React from 'react'
import { connnect } from 'react-redux'

export const OrderProduct = ({
  name,
  category,
  price,
  currency,
  tax_pct,
  quantity,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{price}</p>
      <p>{currency}</p>
      <p>{tax_pct}</p>
      <p>{quantity}</p>
    </div>
  )
}
