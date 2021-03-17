import LOADING from '../actionConstants/index'
export const fetchDetails = () => {
  return {
    type: 'FETCH',
    payload: 'this is something',
  }
}

export const stopLoading = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING,
    })
  }
}
