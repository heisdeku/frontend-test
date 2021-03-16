import React from 'react'

export const Container = ({ name, children }) => {
  return <div data-type={name}>{children}</div>
}
