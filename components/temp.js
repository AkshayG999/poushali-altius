import React from 'react'
import styles from '../styles/temp.module.css';
const temp = () => {
  return (
<div className={styles.container}>

<h1 className={styles.heading}>our services</h1>

<div className={styles.boxcontainer}>

    <div className={styles.box}>
        <img src="/Altius Care @Home.png" alt=""/>
        <h3>HTML 5</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        
    </div>

    <div className={styles.box}>
        <img src="/Couples 1st approach.png" alt=""/>
        <h3>CSS 3</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
        
    </div>

    <div className={styles.box}>
        <img src="/Cutting Edge Technology.png" alt=""/>
        <h3>JavaScript</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>

    </div>

    <div className={styles.box}>
        <img src="/High Success Rate.png" alt=""/>
        <h3>SASS</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
   
    </div>

    <div className={styles.box}>
        <img src="/Insurance Accepted.png" alt=""/>
        <h3>JQuery</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>

    </div>

    <div className={styles.box}>
        <img src="/Premium Facilities .png" alt=""/>
        <h3>React.js</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, commodi?</p>
    
    </div>

</div>

</div>
  )
}

export default temp


