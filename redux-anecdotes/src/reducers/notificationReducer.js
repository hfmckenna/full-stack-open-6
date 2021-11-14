const notification = {
  message: '',
  time: 5000
}

const initialState = notification

export const setNotification = (message, time) => {
  return dispatch => {
    dispatch({
      type: 'changeNotification',
      data: {
        message,
        time
      }
    })
  }
}

export const clearNotification = () => {
  return dispatch => {
    dispatch({
      type: 'clearNotification'
    })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'clearNotification':
      return {
        ...state,
        message: ''
      }
    case 'changeNotification':
      return {
        message: action.data.message,
        time: action.data.time
      }
    default:
      return state
  }
}

export default reducer