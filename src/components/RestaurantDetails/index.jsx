import React from 'react'
import { connect } from 'react-redux'

import { fetchDetails } from '../../redux/actions/'
import ProfilePage from '../../components/Profile'
const RestaurantDetails = ({
  restaurant: { name, street, city, state, zipcode },
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        We are located at: {street} in the city: {city} of {state}
      </p>
      <p>our zipcode is {zipcode}</p>
    </div>
  )
}
const mapStateToProps = ({ data }) => {
  return {
    restaurant: data.restaurant,
  }
}

export default connect(mapStateToProps)(RestaurantDetails)
