const filter = ""

const initialState = filter

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeFilter':
      return action.filter
    default:
      return state
  }
}

export default reducer