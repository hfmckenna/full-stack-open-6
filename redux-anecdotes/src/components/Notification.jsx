import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: 'clearNotification' })
    }, notification.time)
    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    notification.message &&
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification