import React from 'react'
import { Link } from 'react-router-dom'
export const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col w-15'>
      <p className='link'>
        {' '}
        <Link to='/profile'>My Account</Link>
      </p>
      <p className='link'>
        {' '}
        <Link to='/order-summary'>My Order</Link>
      </p>
    </div>
  )
}
