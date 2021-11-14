import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content !== '') {
      event.target.anecdote.value = ''
      dispatch(createAnecdote(content))
      dispatch(setNotification(`You added ${content}`, 5000))
    } else {
      dispatch(setNotification('No anecdote entered!', 1000))
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