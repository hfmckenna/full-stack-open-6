import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)

  const vote = ({ id, content }) => {
    dispatch({ type: 'vote', id: id })
    dispatch({ type: 'changeNotification', message: `You voted for ${content}` })
  }

  return anecdotes.sort((anecdote, previous) => anecdote.votes < previous.votes).map(anecdote =>
    <div key={anecdote.id}>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={() => vote(anecdote)}>vote</button>
      </div>
    </div>)
}

export default AnecdoteList