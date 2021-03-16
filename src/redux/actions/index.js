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

export async function fetchData(dispatch) {
  const response = await api.get('/webdev/assignment')
  dispatch(fetchDataSuccess(response.data))
}
