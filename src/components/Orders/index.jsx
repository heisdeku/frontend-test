import React from 'react'
import { OrderProduct } from '../OrderProduct'

export const Orders = ({ orders }) => {
  return (
    <div>
      {orders.map((order, idx) => (
        <OrderProduct key={`${order.name}-${idx}`} {...order} />
      ))}
    </div>
  )
}
