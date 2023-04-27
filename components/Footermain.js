import React from 'react'
import styles from '../styles/Footermain.module.css';
import Link from 'next/link';
import Image from 'next/image'

const Footermain = () => {
  return (
    <div className={styles.containerfooter}>
      <h1  className={styles.containerhead}>
        {"Our Locations"}
      </h1>
      <hr/>
      <div className={styles.footerwrap}>
      <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
      <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"HBR Layout"}</p>
      </Link>
      <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
      <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"Rajajinagar"}</p>
      </Link>
      <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
      <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"R.R Nagar"}</p>
      </Link>
      </div>
    </div>
  )
}

export default Footermain
