import React from 'react'
import './Container.scss'
export const Container = ({ name, children }) => {
  return (
    <div className={`container container-${name}`} data-type={name}>
      {children}
    </div>
  )
}
