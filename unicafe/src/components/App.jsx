import React from 'react'
import Statistics from './Statisics'

const App = ({ store }) => {
  const setGood = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const setOk = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const setBad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const setZero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  const good = store.getState().good
  const neutral = store.getState().ok
  const bad = store.getState().bad
  const total = good + neutral + bad

  return (
    <div>
      <button onClick={setGood}>good</button>
      <button onClick={setOk}>ok</button>
      <button onClick={setBad}>bad</button>
      <button onClick={setZero}>reset stats</button>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
