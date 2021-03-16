import React from 'react'
import { connect } from 'react-redux'
import { Orders } from '../../components/Orders'
import RestaurantDetails from '../../components/RestaurantDetails'

const OrderSummary = ({ orders }) => {
  return (
    <div>
      <RestaurantDetails />
      <Orders orders={orders} />
    </div>
  )
}
const mapStateToProps = ({ data }) => ({
  orders: data.info.items,
})

export default connect(mapStateToProps)(OrderSummary)
