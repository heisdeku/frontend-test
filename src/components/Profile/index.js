import React from 'react'
import { connect } from 'react-redux'

import { fetchDetails } from '../../redux/actions/'

import { Container } from '../Container/index'
import { ContentBox } from '../ContentBox'

const ProfilePage = ({
  userDeets: { name, id, address, phone, about, likes, dislikes },
}) => {
  return (
    <div>
      <h5>{name}</h5>
      <p>{id}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <div>{about}</div>
      <Container name='likes'>
        {likes.map((like, idx) => (
          <ContentBox key={idx} name={like} />
        ))}
      </Container>
      <Container name='dislikes'>
        {dislikes.map((dislike, idx) => (
          <ContentBox key={idx} name={dislike} />
        ))}
      </Container>
    </div>
  )
}
export default ProfilePage
/*
const mapStateToProps = ({ user }) => ({
  user,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchDetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
*/
