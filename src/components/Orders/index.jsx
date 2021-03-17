import React from 'react'
import { OrderProduct } from '../OrderProduct'
import './Orders.scss'
export const Orders = ({ orders }) => {
  return (
    <div className='your-orders'>
      <h2 className='big-word'>
        YOUR <span>ORDERS</span>
      </h2>
      {orders.map((order, idx) => (
        <OrderProduct key={`${order.name}-${idx}`} {...order} />
      ))}
    </div>
  )
}
