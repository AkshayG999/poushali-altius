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
            <iframe src="https://www.youtube.com/embed/ZrfshZz57tA" className="shadow-1-strong rounded" title="Altius-hospital" allowFullScreen></iframe>
        </div>
      </Container>
    </div>
  )
}

export default Youtube


