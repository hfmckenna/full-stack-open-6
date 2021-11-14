const filter = ''

const initialState = filter

export const setFilter = (filter) => {
  return dispatch => {
    dispatch({
      type: 'changeFilter',
      filter: filter
    })
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'changeFilter':
      return action.filter
    default:
      return state
  }
}

export default reducer