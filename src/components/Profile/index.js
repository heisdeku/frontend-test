import React from 'react'
//import Avatar from '../../assets/images/user.png'

import { Container } from '../Container/index'
import { ContentBox } from '../ContentBox'
import './Profile.scss'
const ProfilePage = ({
  userDeets: {
    data: {
      user: { name, id, address, phone, about, likes, dislikes },
    },
  },
}) => {
  return (
    <div className='profile-container w-fill'>
      <p className='user-welcome'>
        Welcome, <b>{name}</b>
      </p>
      <div className='flex main-container'>
        <div className='w-20'>
          <img
            src='https://images.unsplash.com/photo-1504568758572-1c648768a420?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60'
            className='user-avatar'
            alt='User'
          />
        </div>
        <div className='user-details w-75'>
          <div className='flex group-1'>
            <div className='group-inner'>
              <span>Name: </span>
              <h3>{name}</h3>
            </div>
            <div className='group-inner'>
              <span>Your ID: ${id}</span>
            </div>
          </div>
          <div className='group-inner group-2'>
            <span>About: </span>
            <p>{about}</p>
          </div>
          <div className='w-fill group-2'>
            <span>Address: </span>
            <p>{address}</p>
          </div>
          <div className='flex group-3'>
            <div className='w-fill group-2'>
              <span>Phone Number: </span>
              <p>{phone}</p>
            </div>
            <Container name='likes'>
              <span style={{ textAlign: 'left' }}>My Likes:</span>
              {likes.map((like, idx) => (
                <ContentBox key={idx} name={like} />
              ))}
            </Container>
            <Container name='dislikes'>
              <span style={{ textAlign: 'left' }}>My Dislikes:</span>
              {dislikes.map((dislike, idx) => (
                <ContentBox key={idx} name={dislike} />
              ))}
            </Container>
          </div>
        </div>
      </div>
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
