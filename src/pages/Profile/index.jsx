import React, { useMemo } from 'react'
import { connect } from 'react-redux'

import ProfilePage from '../../components/Profile'
const Profile = ({ user }) => {
  return (
    <div>
      <ProfilePage userDeets={user} />
    </div>
  )
}
const mapStateToProps = ({ data }) => {
  return {
    user: data.info,
  }
}
export default connect(mapStateToProps)(Profile)
