import React from 'react'
import {
  getAllProductsTotal,
  getAllProductsTotalWithTax,
} from '../../services/helpers'

import './OrderSummary.scss'
const OrderSummarySection = ({ orders }) => {
  return (
    <div className='order-summary'>
      <div className='flex'>
        <span>Total Items Ordered:</span>
        <p> {orders.length} Items</p>
      </div>
      <div className='flex'>
        <span>Total price:</span>
        <p> {`${orders[0].currency} ${getAllProductsTotal(orders)}`}</p>
      </div>
      <div className='flex'>
        <span>Total price (inc. Tax):</span>
        <p> {`${orders[0].currency} ${getAllProductsTotalWithTax(orders)}`}</p>
      </div>
      <button className='order-btn'>Proceed to Order</button>
    </div>
  )
}

export default OrderSummarySection
