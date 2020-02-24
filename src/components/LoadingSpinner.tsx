import React from 'react'
import { ClipLoader } from 'react-spinners'
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.container} data-testid="loading">
      <ClipLoader color={'#12dddd'} size="80px" />
    </div>
  )
}

export default LoadingSpinner
