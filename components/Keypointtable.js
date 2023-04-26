import React, { useContext } from "react";
import styles from '../styles/Keypointtable.module.css';
import Card from "../components/Card";
import HeartEmoji from "../src/img/heartemoji.png";
import Glasses from "../src/img/glasses.png";
import tech from "../public/Cutting Edge Technology.png"
import Humble from "../src/img/humble.png";
import { themeContext } from "../src/Context";
import { motion } from "framer-motion";
import Image from 'next/image'


const Services = () => {
  // context
  const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className={styles.serviceswrap}>
    <div className={styles.services} id="services">
      {/* left side */}
      <div className={styles.awesome} >
        {/* dark mode */}
        {/* <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span> */}
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className={styles.sblur1} style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className={styles.cards}>
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Altius Cares"}
            detail={"Lorem ispum is simpley dummy text of printing of printing Lorem"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        <Image className={styles.servicesimg} src="/Couples 1st approach.png" alt="Altius image"/>
          <Card
            emoji={tech}
            heading={"Couples 1st approach"}
            detail={"Lorem ispum is simpley dummy text of printing of printing Lorem"}
          />
          
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Cutting Edge Technology"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div className={styles.sblur1}
          
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
    </div>
  );
};

export default Services;