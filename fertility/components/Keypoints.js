// import React from "react";
// import styles from '../styles/Keypoints.module.css'
// // import img from "../public/Advance Features"

// // import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom'

// const images = [
//   { src: "/Affordable Treatments .png", alt: "Image 1", text: "Affordable Treatments" },
//   { src: "/Altius Care @Home.png", alt: "Image 2", text: "Altius Care @Home" },
//   { src: "/Couples 1st approach.png", alt: "Image 3", text: "Couples 1st approach" },
//   { src: "/Cutting Edge Technology.png", alt: "Image 4", text: "Cutting Edge Technology" },
//   { src: "/High Success Rate.png", alt: "Image 5", text: "High Success Rate" },
//   { src: "/Insurance Accepted.png", alt: "Image 6", text: "Insurance Accepted" },
//   { src: "/Premium Facilities .png", alt: "Image 7", text: "Premium Facilities" },
//   { src: "/Transparency in cost and Treatments.png", alt: "Image 8", text: "Transparency in cost and Treatments" },
//   { src: "/Zero Cost EMI.png", alt: "Image 9", text: "Zero Cost EMI" },
// ];

// const Keypoints = () => {
//   return (
//     <div className={styles.imagegridwrap}>
//     <h2 className={styles.keyheader}>Why Choose Altius</h2>
//     <div className={styles.imagegrid}>
//       {images.map((image, index) => (
//         <div className={styles.imgkeywrap} key={image.alt}>
//         <img key={index} src={image.src} alt={image.alt} />
//         <p className={styles.captionwrap}>{image.text}</p>
//         </div>
        
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Keypoints;


import React from 'react'
import styles from '../styles/temp.module.css';
const Keypoints = () => {
  return (
<div className={styles.container}>

<h1 className={styles.heading}>Why Choose Altius</h1>

<div className={styles.boxcontainer}>

    <div className={styles.box}>
        <img src="/Altius Care @Home.png" alt=""/>
        <h3>Altius Care</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        
    </div>

    <div className={styles.box}>
        <img src="/Couples 1st approach.png" alt=""/>
        <h3>Couples 1st approach</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        
    </div>

    <div className={styles.box}>
        <img src="/Cutting Edge Technology.png" alt=""/>
        <h3>Cutting Edge Technology</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>

    </div>

    <div className={styles.box}>
        <img src="/High Success Rate.png" alt=""/>
        <h3>High Success Rate</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
   
    </div>

    <div className={styles.box}>
        <img src="/Insurance Accepted.png" alt=""/>
        <h3>Insurance Accepted</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>

    </div>

    <div className={styles.box}>
        <img src="/Premium Facilities .png" alt=""/>
        <h3>Premium Facilities</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
    
    </div>
    <div className={styles.box}>
        <img src="/Transparency in cost and Treatments.png" alt=""/>
        <h3>Transparency in cost and Treatments</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
    
    </div>
    <div className={styles.box}>
        <img src="/Zero Cost EMI.png" alt=""/>
        <h3>Zero Cost EMI</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
    
    </div>
    <div className={styles.box}>
        <img src="/Transparency in cost and Treatments.png" alt=""/>
        <h3>Affordable Treatments</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
    
    </div>

</div>

</div>
  )
}

export default Keypoints


