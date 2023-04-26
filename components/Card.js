import React from "react";
import styles from '../styles/Card.module.css';
import Image from 'next/image'


const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className={styles.card} style={{borderColor: {color}}}> 
      <Image src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className={styles.cbutton}>LEARN MORE</button>
    </div>
  );
};

export default Card;