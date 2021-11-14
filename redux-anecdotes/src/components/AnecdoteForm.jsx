import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content !== '') {
      event.target.anecdote.value = ''
      dispatch(createAnecdote(content))
      dispatch({ type: 'changeNotification', message: `You added ${content}` })
    } else {
      dispatch({ type: 'changeNotification', message: 'No anecdote entered!' })
    }
  }

  return (<>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote' /></div>
      <button>create</button>
    </form>
  </>)
}

export default AnecdoteForm