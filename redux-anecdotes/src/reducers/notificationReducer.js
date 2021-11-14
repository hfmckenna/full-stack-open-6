const notificationMessage = ""

const initialState = notificationMessage

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'clearNotification':
      return ""
    case 'changeNotification':
      return action.message
    default:
      return state
  }
}

export default reducer