import React from 'react'
import styles from '../../styles/male.module.css'
import NavbarF from '@/components/Navbar'
import Aboutus from '@/components/Aboutus'
import Footermain from '@/components/Footermain'
import Footer from '@/components/Footer'
import Image from "next/image";
const vissionmission = () => {
    return (
        <div className={styles.bodymwrap}>
            <NavbarF />

            <h1 className={styles.headingwrap}>
                {"Our Vision and Mission"}
            </h1>
            <hr className={styles.linewrap} />
            <h1 className={styles.headingmwrap}>

                {"Our Vision"}
            </h1>
            <div className={styles.bodywrap}>
                <Image
                    src="/Advance Features/Freezing or Preservation.png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />

                {/* <img className={styles.imgwrap} src='/Advance Features/Freezing or Preservation.png' width="400" height="300" alt=''/> */}

                <p className={styles.pwrap}>{"Freezing or preservation of reproductive material is a common technique used in infertility treatments. It allows individuals to preserve their eggs, sperm, or embryos for future use, especially for those who are undergoing medical treatments that may affect their fertility or for those who want to delay parenthood. The process involves the collection and freezing of reproductive material, which can be stored for years without losing its quality. When the individual or couple is ready to conceive, the frozen material can be thawed and used in assisted reproduction techniques such as IVF. Freezing or preservation of reproductive material offers a valuable option for individuals or couples who want to ensure their future chances of conception."}</p>
            </div>
            <h1 className={styles.headingmwrap}>
                {"Our Mission"}
            </h1>
            <div className={styles.bodywrap}>
                <p className={styles.pwrap}>{"Magnetic-activated cell sorting (MACS) is a specialized laboratory technique used in infertility treatments to improve the quality of sperm. MACS is a type of sperm selection method that allows for the isolation and separation of high-quality sperm from those with abnormalities. The process involves attaching magnetic beads to the sperm cells and passing them through a magnetic field. The high-quality sperm cells with normal DNA undergo magnetic attraction and are collected, while the abnormal sperm cells remain behind. This technique helps increase the chances of fertilization and embryo development, especially in cases where male partners have sperm DNA fragmentation or poor sperm quality. MACS can be used in combination with other assisted reproductive techniques, such as ICSI, to improve treatment outcomes"}</p>
                <Image
                    src="/Advance Features/MACS.png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Advance Features/MACS.png' width="400" height="300" alt=''/> */}

            </div>
            <Footer />
            <Aboutus />
            <Footermain />
        </div>
    )
}

export default vissionmission
