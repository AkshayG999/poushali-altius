import React from 'react'
import styles from '../../../styles/treatments.module.css'
import NavbarF from '@/components/Navbar'
import Footer from '@/components/Footer'
import Aboutus from '@/components/Aboutus'
import Footermain from '@/components/Footermain'
import Faq from '@/components/Faqs'
import Image from "next/image";
import Card from 'react-bootstrap/Card';

const iui = () => {
    return (
        <div className={styles.body}>
        <NavbarF/>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h1 className={styles.headingwrap}>
                        Experience the hope of starting a family with IUI treatment in Bangalore
                    </h1>
                    <p className={styles.pwrap}>
                        {"Lorem ipsum dolor sit amet. Sit possimus earum et sapiente incidunt a odit alias sed neque saepe est nostrum quasi est accusamus rerum aut veniam dignissimos. Quo quibusdam aspernatu et voluptam magni."}
                    </p>
                </div>
                <div className={styles.image}>
                    <Image
                        src="/Female Fertility Icon/ICSI.png"
                        className={styles.imgwrap}
                        alt="My image"
                        width={600}
                        height={300}
                    />
                </div>
            </div>
                <Faq/>
        </div>
    )
}

export default iui
