import React from 'react'
//import Avatar from '../../assets/images/user.png'

//import './Profile.scss'
const OrderUser = ({ name, id, address }) => {
  return (
    <div className='w-fill'>
      <div className='main-container order-user'>
        <div className='flex'>
          <div className='w-20'>
            <img
              src='https://images.unsplash.com/photo-1504568758572-1c648768a420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
              className='user-avatar'
              alt='User'
            />
          </div>
          <div className='flex group-1 w-75'>
            <div className='order__user-group-inner'>
              <span>Name: </span>
              <h3>{name}</h3>
            </div>
            <div className='order__user-group-inner'>
              <span>ID: ${id}</span>
            </div>
          </div>
        </div>
        <div className='w-fill group-2'>
          <span>Address: </span>
          <p>{address}</p>
        </div>
      </div>
    </div>
  )
}
export default OrderUser
