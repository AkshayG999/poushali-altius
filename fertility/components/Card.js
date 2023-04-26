import React from "react";
import styles from '../styles/Card.module.css';


const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className={styles.card} style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className={styles.cbutton}>LEARN MORE</button>
    </div>
  );
};

export default Card;