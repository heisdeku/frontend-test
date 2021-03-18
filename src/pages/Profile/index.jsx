import React, { useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, fetchDataStart } from '../../redux/actions'
const ProfilePage = React.lazy(() => import('../../components/Profile'))
const Profile = () => {
  /*const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDataStart())
    dispatch(fetchData())
  }, [dispatch])*/
  const userDeets = useSelector((state) => state.data)
  console.log(userDeets)
  const { loading, error } = userDeets
  return (
    <Suspense fallback='<div>loading...</div>'>
      {loading ? (
        <div className='loader-container hide'>
          <div className='loader donut'></div>
          <p>Loading .....</p>
        </div>
      ) : error ? (
        <p
          style={{
            marginLeft: 'calc(160px + 8%',
            width: 'calc(100vw - (160px + 4%)',
            padding: '10px 4%',
          }}
        >
          {error}
        </p>
      ) : (
        <ProfilePage userDeets={userDeets} />
      )}
    </Suspense>
  )
}
export default Profile
