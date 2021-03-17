import React from 'react'
import { connect } from 'react-redux'
import { fetchDetails } from '../../redux/actions/'

const Profile = () => {
  return <div>this is the order page</div>
}
const mapStateToProps = ({ user }) => ({
  value: user,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchDetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
