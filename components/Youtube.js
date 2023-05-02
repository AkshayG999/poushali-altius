import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/Youtube.module.css'
const Youtube = () => {
  return (
    <div className={styles.containeryoutubewrap}>
      <Container>
        <h1 className={styles.containerheading}>{"Testimonials"}</h1>
        <hr className={styles.line}/>
        <div className={styles.containeryoutube}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZrfshZz57tA"  allowfullscreen></iframe>
        </div>
      </Container>
    </div>
  )
}

export default Youtube


