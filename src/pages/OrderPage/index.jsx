import React from 'react'
import { connect } from 'react-redux'
import { fetchDetails } from '../../redux/actions/'

const OrderSummary = () => {
  return <div>this is the order page</div>
}
const mapStateToProps = ({ order }) => ({
  value: order,
})

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: () => dispatch(fetchDetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary)
