import React from 'react'
import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <span role="img" aria-label="Developer">
        👩‍💻
      </span>{' '}
      Oops, something went wrong...{' '}
      <span role="img" aria-label="Developer">
        👨‍💻
      </span>
    </div>
  )
}

export default ErrorMessage
