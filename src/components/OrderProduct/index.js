import React from 'react'
import { getProductTotal, getProductTotalWithTax } from '../../services/helpers'

import './OrderProduct.scss'
export const OrderProduct = ({
  name,
  category,
  price,
  currency,
  tax_pct,
  quantity,
}) => {
  return (
    <div className='order-product'>
      <div className='order-product__top flex flex-col'>
        <span>Order Details</span>
        <div className='flex order-product__element'>
          <h3>{name}</h3>
          <p>Order Name</p>
        </div>
        <div className='flex order-product__element'>
          <h5>{category}</h5>
          <p>Category</p>
        </div>
        <div className='flex order-product__element'>
          <h5>{price}</h5>
          <p>Price(unit)</p>
        </div>
      </div>
      <div className='order-product__quantity'>
        <h5>Quantity</h5>
        <p>{quantity}</p>
      </div>
      <div className='order-product__total'>
        <h5>Order Total</h5>
        <p>
          {`${currency} 
          ${getProductTotal(price, quantity)}`}
        </p>
      </div>
      <div className='order-product__total'>
        <h5>Order Total With Tax</h5>
        <p>
          {`${currency}  
          ${getProductTotalWithTax(price, quantity, tax_pct)}`}
        </p>
      </div>
    </div>
  )
}
