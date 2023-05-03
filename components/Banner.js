import React from 'react';
import styles from '../styles/Banner.module.css'
import Image from 'next/image'
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function Banner() {
    return (
        <div className={styles.bannerwrap}>
        <h1 className={styles.bannerheader}>{"Welcome To Altius Fertility"}</h1>

        <div className={styles.wrapper}>
            <div className={styles.boxp}>{"Altius Fertility is a place where dreams come alive, hopes never fade, and possibilities never end. We strive tirelessly to assist you to treasure the golden moment of holding your little bundles of joy.You no longer need to go long distances for fertility treatments! Altius Fertility now has five strategically positioned branches in Bengaluru and wants to expand to additional places in the near future. Our experienced staff and state-of-the-art equipment ensure that you receive the best possible care and treatment for all your fertility needs.We take pride in our achievements and are committed to excellence in patient care. Altius Fertility has received multiple awards and recognitions for our outstanding services, including accreditations from leading healthcare organizations.At Altius Fertility, we understand that every patient is unique, and we strive to provide personalized care that meets your individual needs. We use the latest technology and techniques to deliver successful outcomes and help you achieve your dream of parenthood.Our facilities and staff are second to none, and we invite you to visit us and see for yourself why Altius Fertility is the best choice for fertility treatments in Bengaluru."}</div>
            <div className={styles.box}>
            <Image className={styles.bannerimg} height={500} width={500} src="/altiushospital.JPG" alt="Card img" />
            </div>
            {/* <div className={styles.box}></div> */}
        </div>
        </div>
    )
}

export default Banner

