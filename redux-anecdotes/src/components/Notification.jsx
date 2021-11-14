import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearNotification } from '../reducers/notificationReducer'

const Notification = ({ notification, clearNotification }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      clearNotification()
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

const mapStateToProps = (state) => {
  return { notification: state.notification }
}

const ConnectedNotification = connect(mapStateToProps, { clearNotification })(Notification)

export default ConnectedNotification