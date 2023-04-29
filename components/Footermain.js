// import React from 'react'
// import styles from '../styles/Footermain.module.css';
// import Link from 'next/link';
// import Image from 'next/image'

// const Footermain = () => {
//   return (
//     <div className={styles.containerfooter}>
//       <h1  className={styles.containerhead}>
//         {"Our Locations"}
//       </h1>
//       <hr/>
//       <div className={styles.footerwrap}>
//       <Link className={styles.containerlink} href="https://goo.gl/maps/BgArtPEpbp2w8zcM6">
//       <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"HBR Layout"}</p>
//       </Link>
//       <Link className={styles.containerlink} href="https://goo.gl/maps/j2FfSEzFkgDQe5VW9">
//       <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"Rajajinagar"}</p>
//       </Link>
//       <Link className={styles.containerlink} href="https://goo.gl/maps/TPDV2bRGPK7Wr1aS6">
//       <p className={styles.containerpara}><Image className={styles.containerimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>{"R.R Nagar"}</p>
//       </Link>
//       </div>
//     </div>
//   )
// }

// export default Footermain


import React from 'react';
import styles from '../styles/Footermain.module.css';
import Link from 'next/link';
import Image from 'next/image'

const Footermain = () => {
  return (
    <footer className={styles.footer}>
    
    <div className={styles.footerContainerwrappers}>
    <div>
    
    <Link className={styles.containerlinklogo} href="https://fertilityhospital.vercel.app/">
                            <Image
                                src="/Altius Fertility Logo.png"
                                alt="My Image"
                                width={250}
                                height={150}
                                className={styles.containerlogo}
                            />
                        </Link>
    </div>
    <div className={styles.footerContainer}>
        <h2 className={styles.containerhead}>Head Office</h2>
        <hr/>
        <div className={styles.footerLinks}>
        <p className={styles.containerlinkitems}>
                  {"# 6/63, 59th Cross, 4th Block, Rajajinagar Entrance,"}
                  <br/>{"Opp. MEI Polytechnic, Near Ram Mandir,"}
                  <br/> {" Bengaluru - 560 010"}

                </p>
                <p className={styles.containerlinkitems}>
                  +91-8882799799
                </p>
                <p className={styles.containerlinkitems}>
                  COVID - 19 FREE
                </p>
        </div>
      </div>
    <div className={styles.footerContainer}>
        <h2 className={styles.containerhead}>Useful links</h2>
        <hr/>
        <div className={styles.footerLinks}>
        <p className={styles.containerlinkitems}>Emergency</p>
                 <p className={styles.containerlinkitems}>Ambulance</p>
                 <p className={styles.containerlinkitems}>Appoinments</p>
                 <p className={styles.containerlinkitems}>Help</p>
        </div>
      </div>

      <div className={styles.footerContainer}>
        <h2 className={styles.containerhead}>About us</h2>
        <hr/>
        <div className={styles.footerLinks}>
          <Link className={styles.containerlinkitems} href="#">Founders & Directors</Link>
          <Link className={styles.containerlinkitems} href="#">Vission & Mission</Link>
          <Link className={styles.containerlinkitems} href="#">CSR</Link>
          <Link className={styles.containerlinkitems} href="#">MC</Link>
          <Link className={styles.containerlinkitems} href="#">Awards</Link>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <h2 className={styles.containerhead}>Resources</h2>
        <hr/>
        <div className={styles.footerLinks}>
          <Link className={styles.containerlinkitems} href="#">Blogs</Link>
          <Link className={styles.containerlinkitems} href="#">Videos</Link>
          <Link className={styles.containerlinkitems} href="#">FAQ</Link>
          <Link className={styles.containerlinkitems} href="#">Myth & Fact</Link>
        </div>
      </div>

      </div>
      <div className={styles.copyright}>
         Copyright 2022 © 
         <Link className={styles.containerlinkitems} href="#">Altius Sripada Hospitals LLP</Link>
        </div>
    </footer>
  );
};

export default Footermain;
