import React from 'react'
import styles from '../styles/Footermain.module.css';
import Link from 'next/link';

const Footermain = () => {
  return (
    <div className={styles.containerfooter}>
      <h1  className={styles.containerhead}>
        Our Locations
      </h1>
      <hr/>
      <div className={styles.footerwrap}>
      <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
      <p className={styles.containerpara}><img className={styles.containerimg} src="/location transparent.png"/>HBR Layout</p>
      </Link>
      <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
      <p className={styles.containerpara}><img className={styles.containerimg} src="/location transparent.png"/>Rajajinagar</p>
      </Link>
      <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
      <p className={styles.containerpara}><img className={styles.containerimg} src="/location transparent.png"/>R.R Nagar</p>
      </Link>
      </div>
    </div>
  )
}

export default Footermain
