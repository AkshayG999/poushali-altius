import React from 'react';
import styles from '../styles/BannerDoc.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom'


function BannerDoc() {
    return (
        <div className={styles.bannerwrap}>
        <h1 className={styles.bannerheader}>Dr. B Ramesh</h1>

        <div className={styles.wrapper}>
        
        <div className={styles.box}>
        
            <Image className={styles.bannerimg} src="https://altiushospital.com/wp-content/uploads/2021/01/about-img.jpg" alt="Card img" />
            </div>
            
            <div className={styles.boxp}>{"Dr. B Ramesh is an internationally acclaimed gynecologist, having a signiﬁcant presence both academically and clinically all over the country with extensive experience speaking at conferences on topics like gynaecology, laparoscopy surgery, and infertility. He has performed more than 100,000 major Gynaec Laparoscopic Surgeries, and more than 9,000 Laparoscopic Hysterectomies which are rare feats for any surgeon to achieve today anywhere worldwide.  Dr. B. Ramesh is also the first gynecologist to perform 3D laparoscopic surgeries in India."}</div>
            

            {/* <div className={styles.box}></div> */}
        </div>
        </div>
    )
}

export default BannerDoc