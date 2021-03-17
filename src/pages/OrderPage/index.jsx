import React from 'react'
import { connect } from 'react-redux'
import { Orders } from '../../components/Orders'
import OrderSummarySection from '../../components/OrderSummary'
import RestaurantDetails from '../../components/RestaurantDetails'
import OrderUser from '../../components/OrderUser'

import './OrderPage.scss'
const OrderSummary = ({ orders, restaurant, user }) => {
  return (
    <div className='flex w-full order-page'>
      <div className='order__section-1'>
        <RestaurantDetails {...restaurant} />
        <Orders orders={orders} />
      </div>
      <div className='order__section-2'>
        <OrderUser {...user} />
        <OrderSummarySection orders={orders} />
      </div>
    </div>
  )
}
const mapStateToProps = ({ data }) => {
  const { restaurant, items, user } = data.data
  return {
    restaurant,
    orders: items,
    user,
  }
}

export default connect(mapStateToProps)(OrderSummary)
