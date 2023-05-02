import React from 'react';
import styles from '../styles/Banner.module.css'
import Image from 'next/image'
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom'

// const Banner = () => {
//     return (
//         <div className={styles.container}>
//         <div className={styles.bannerwrapper}>
//             <h1 className={styles.bannerheader}>Welcome To Altius</h1>
//         </div>
//             <div className="card bg-dark text-white h" id={styles.cardimg}>
//                 <img className={styles.bannerimg} src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg" alt="Card img" />
//                 <div className="card-img-overlay">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                     <p className="card-text">Last updated 3 mins ago</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Banner


function Banner() {
    return (
        <div className={styles.bannerwrap}>
        <h1 className={styles.bannerheader}>{"Welcome To Altius Fertility"}</h1>

        <div className={styles.wrapper}>
            <div className={styles.boxp}>{"Altius Fertility is a place where dreams come alive, hopes never fade, and possibilities never end. We strive tirelessly to assist you to treasure the golden moment of holding your little bundles of joy.You no longer need to go long distances for fertility treatments! Altius Fertility now has five strategically positioned branches in Bengaluru and wants to expand to additional places in the near future. Our experienced staff and state-of-the-art equipment ensure that you receive the best possible care and treatment for all your fertility needs.We take pride in our achievements and are committed to excellence in patient care. Altius Fertility has received multiple awards and recognitions for our outstanding services, including accreditations from leading healthcare organizations.At Altius Fertility, we understand that every patient is unique, and we strive to provide personalized care that meets your individual needs. We use the latest technology and techniques to deliver successful outcomes and help you achieve your dream of parenthood.Our facilities and staff are second to none, and we invite you to visit us and see for yourself why Altius Fertility is the best choice for fertility treatments in Bengaluru."}</div>
            <div className={styles.box}>
            <Image className={styles.bannerimg} height={500} width={500} src="/hospital-image.jpg" alt="Card img" />
            </div>
            {/* <div className={styles.box}></div> */}
        </div>
        </div>
    )
}

export default Banner

