import React from 'react'
import styles from '../styles/Footer.module.css'
// import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@material-ui/icons';

// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom'
export default function Footer() {
    const redirectUrl = 'https://altiushospital.com/our-doctors/';

    const handleClick = () => {
      window.location.href = redirectUrl;
    }
    return (
        <div className={styles.containerfooter}>
            <footer className={styles.footerwrap}>
                <p onClick={handleClick} className={styles.footermain}>Book Appointment</p>

            </footer>
        </div>
    )
}
