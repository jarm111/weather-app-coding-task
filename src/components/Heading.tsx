import React from 'react'
import styles from './Heading.module.css'

type Props = {
  content: string
}

const Heading = ({ content }: Props) => (
  <div className={styles.container}>
    <h1 className={styles.text}>{content}</h1>
  </div>
)

export default Heading
