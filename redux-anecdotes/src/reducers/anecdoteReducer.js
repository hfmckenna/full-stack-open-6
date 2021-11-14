import anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'initAnecdotes',
      data: anecdotes
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'addAnecdote',
      data: newAnecdote,
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.vote(anecdote)
    dispatch({
      type: 'vote',
      data: newAnecdote,
    })
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'vote': {
      const filtered = state.filter(anecdote => anecdote.id !== action.data.id)
      return [...filtered, action.data]
    }
    case 'addAnecdote': {
      return [...state, action.data]
    }
    case 'initAnecdotes':
      return action.data
    default:
      return state
  }
}

export default reducer