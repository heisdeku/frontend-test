import { api } from '../../services/config'

export const fetchDataStart = () => {
  return {
    type: 'FETCH_DATA_START',
  }
}

export const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: {
      data,
    },
  }
}
export const fetchDataFailed = (message) => {
  return {
    type: 'FETCH_DATA_FAILED',
    payload: {
      message,
    },
  }
}
export function fetchData() {
  return (dispatch) => {
    const response = api.get('/webdev/assignment')
    response
      .then((resp) => {
        dispatch(fetchDataSuccess(resp.data))
      })
      .catch((err) => dispatch(fetchDataFailed(err.message)))
  }
}
