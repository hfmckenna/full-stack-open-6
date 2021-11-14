export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'initAnecdotes',
    data: anecdotes,
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'vote': {
      const filtered = state.filter(anecdote => anecdote.id !== action.id)
      const updateAnecdote = state.find(anecdote => anecdote.id === action.id)
      const newAnecdote = {
        ...updateAnecdote,
        votes: updateAnecdote.votes + 1,
      }
      return [...filtered, newAnecdote]
    }
    case 'addAnecdote': {
      return [...state, action.anecdote]
    }
    case 'initAnecdotes':
      return action.data
    default:
      return state
  }
}

export default reducer