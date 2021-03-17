import React from 'react'
import { connect } from 'react-redux'
import './RestaurantDetails.scss'
const RestaurantDetails = ({ name, street, city, state, zipcode }) => {
  return (
    <div className='restaurant-details flex flex-col'>
      <h3 className='restaurant-name'>{name}</h3>
      <div className='flex'>
        <span>Location:</span>
        <p>
          at{street} in the city: {city} of {state}
        </p>
      </div>
      <div className='flex'>
        <span>Zip Code:</span>
        <p>{zipcode}</p>
      </div>
    </div>
  )
}
const mapStateToProps = ({ data }) => {
  return {
    restaurant: data.restaurant,
  }
}

export default connect(mapStateToProps)(RestaurantDetails)
