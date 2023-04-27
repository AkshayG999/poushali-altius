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
        <h1 className={styles.bannerheader}>{"Welcome To Altius"}</h1>

        <div className={styles.wrapper}>
            <div className={styles.boxp}>{"I am some text I am some text I am some text  I am some text I am some text I am some text.I am some text I am some text I am some text  I am some text I am some text I am some text.I am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some textI am some text I am some text I am some text  I am some text I am some text I am some text"}</div>
            <div className={styles.box}>
            <Image className={styles.bannerimg} height={500} width={500} src="/Female Fertility Icon transparent/Embryo Donation transparent.png" alt="Card img" />
            </div>
            {/* <div className={styles.box}></div> */}
        </div>
        </div>
    )
}

export default Banner

