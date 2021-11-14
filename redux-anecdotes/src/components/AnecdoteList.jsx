import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch({ type: 'changeNotification', message: `You voted for ${anecdote.content}` })
  }

  return anecdotes.filter(anecdote => anecdote.content.indexOf(filter) !== -1).sort((anecdote, previous) => anecdote.votes < previous.votes).map(anecdote =>
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