import React from 'react'
import styles from '../styles/Location.module.css'
import Image from "next/image";
function Location() {
    const redirectUrlh = 'https://goo.gl/maps/BgArtPEpbp2w8zcM6';

    const handleClickh = () => {
      window.location.href = redirectUrlh;
    }
    const redirectUrlr = 'https://goo.gl/maps/j2FfSEzFkgDQe5VW9';

    const handleClickr = () => {
      window.location.href = redirectUrlr;
    }
    const redirectUrlrr = 'https://goo.gl/maps/TPDV2bRGPK7Wr1aS6';

    const handleClickrr = () => {
      window.location.href = redirectUrlrr;
    }
  return (
    
    <div>
             
        
          <h1 className={styles.containerheading}>{"Our Locations"}</h1>
          
          <hr className={styles.line}/>
        
        <div className={styles.locationwrapper}>

            <div className={styles.locationwrap}>
              
              <Image className={styles.locationimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>
                <h1 className={styles.location}>{"HBR Layout"}</h1>
                <p className={styles.details}>{"#511,Outer ring road,"}<br/>{"4th Block HBR layout,"}<br/>{"Bengaluru"}</p>
                <p className={styles.contactno}>{"Phone: +918882799799"}</p>
                <p className={styles.contactno}>{"Email : care@altiushospital.com"}</p>
              
              <button onClick={handleClickh} className={styles.btnD}>{"Get Direction->"}</button>

            
          </div>
          <div className={styles.locationwrap}>
              
              <Image className={styles.locationimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>
                <h1 className={styles.location}>{"Rajajinagar"}</h1>
                <p className={styles.details}>{"# 6/63, 59th Cross, 4th Block,"}<br/>{"Rajajinagar Entrance,"}<br/>{"Opp. MEI Polytechnic,"}<br/>{" Near Ram Mandir,"}<br/>{"Bengaluru - 560 010"}</p>
                <p className={styles.contactno}>{"Phone: +918882799799"}</p>
                <p className={styles.contactno}>{"Email : care@altiushospital.com"}</p>
              
              <button onClick={handleClickr} className={styles.btnD}>{"Get Direction->"}</button>

            
          </div>
          <div className={styles.locationwrap}>
              
              <Image className={styles.locationimg} src="/location transparent.png" alt="Altius image" height={50} width={50}/>
                <h1 className={styles.location}>{"Rajarajeswari Nagar"}</h1>
                <p className={styles.details}>{"# 915, First Floor Danush Palza, "}<br/>{" Ideal Homes Township,"}<br/>{" Rajarajeshwarinagar,"}<br/>{"Bengaluru - 560098"}</p>
                <p className={styles.contactno}>{"Phone: +918882799799"}</p>
                <p className={styles.contactno}>{"Email : care@altiushospital.com"}</p>
              
              <button onClick={handleClickrr} className={styles.btnD}>{"Get Direction->"}</button>

            
          </div>
          </div>
    </div>
  )
}

export default Location
