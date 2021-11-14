import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content !== '') {
      event.target.anecdote.value = ''
      createAnecdote(content)
      setNotification(`You added ${content}`, 5000)
    } else {
      setNotification('No anecdote entered!', 1000)
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
const ConnectedAnecdoteForm = connect(null, { createAnecdote, setNotification })(AnecdoteForm)

export default ConnectedAnecdoteForm