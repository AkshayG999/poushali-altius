import React from 'react';
import styles from '../styles/Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import {
  Treatments,
} from "components/popover";



// const menu = [
//   {
//     id: 1,
//     option: <Treatments />,
//   }
// ];


export default function NavbarF() {
  const redirectUrl = 'http://localhost:3000/male/maleinfertility';

  const handleClick = () => {
    window.location.href = redirectUrl;
  }
  const redirectUrlf = 'http://localhost:3000/female/femaleinfertility';

  const handleClickf = () => {
    window.location.href = redirectUrlf;
  }
  const redirectUrla = 'http://localhost:3000/advanced/advance';

  const handleClicka = () => {
    window.location.href = redirectUrla;
  }

  const redirectUrlC = 'https://altiushospital.com/contact-us/';

  const handleClickC = () => {
    window.location.href = redirectUrlC;
  }
  const redirectUrlA = 'https://altiushospital.com/altius-cares/';

  const handleClickA = () => {
    window.location.href = redirectUrlA;
  }

  
  
  return (
    <div className={styles.containernav}>
    <Navbar bg="light" expand="lg">
      <Container className={styles.containerwrap}>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            
            <NavDropdown className={styles.containertitle} title="About us" id="basic-nav-dropdown">
              <NavDropdown.Item className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Founders & Directors</NavDropdown.Item>
              <NavDropdown.Item className={styles.containerItem} href="#action/3.2">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
                Vission & Mission
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.containerItem} href="#action/3.3">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              CSR
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.containerItem} href="#action/3.3">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Mc
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={styles.containerItem} href="#action/3.4">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
                Awards
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className={styles.containertitle} title="Treatments" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleClick} className={styles.containerItemh} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Male
              </NavDropdown.Item>
              <hr className={styles.line}/>
              <div className={styles.containerItemwrap}>
              <div>
              <NavDropdown.Item onClick={handleClick} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              TESA/PESA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClick} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              CASA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClick} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Andrology
              </NavDropdown.Item>
              </div>
              <div>
              <NavDropdown.Item onClick={handleClick} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Varicocele
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClick} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Semen Freezing
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClick} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              sperm Donation
              </NavDropdown.Item>
              </div>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItemh} href="#action/3.2">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
                Female
              </NavDropdown.Item>
              <hr className={styles.line}/>
              <div className={styles.containerItemwrap}>
              <div>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              OI/IT
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              ICSI
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              IUI
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              FET
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              IVF
              </NavDropdown.Item>
              </div>
              <div>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Laparoscopy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Hysteroscopy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Surrogacy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Egg donation
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClickf} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Embryo Donation
              </NavDropdown.Item>
              </div>
              </div>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleClicka} className={styles.containerItemh} href="#action/3.3">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Advanced
              </NavDropdown.Item>
              <hr className={styles.line}/>
              <div className={styles.containerItemwrap}>
              <div>
              <NavDropdown.Item onClick={handleClicka} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              preservation
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClicka} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              MACS
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClicka} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              PICSI
              </NavDropdown.Item>
              </div>
              <div>
              <NavDropdown.Item onClick={handleClicka} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Sequential transfer
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClicka} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Endometrial
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleClicka} className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Rejuvenation
              </NavDropdown.Item>
              </div>
              </div>
            </NavDropdown>

            <NavDropdown className={styles.containertitle} title="Cost" id="basic-nav-dropdown">
              <NavDropdown.Item className={styles.containerItem} href="#action/3.1"><img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Action
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.containerItem} href="#action/3.2">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.containerItem} href="#action/3.3">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={styles.containerItem} href="#action/3.4">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className={styles.containertitle} title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item className={styles.containerItem} href="#action/3.1">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Blogs
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.containerItem} href="#action/3.2">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
                Videos
              </NavDropdown.Item>
              <NavDropdown.Item className={styles.containerItem} href="#action/3.3">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              FAQs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className={styles.containerItem} href="#action/3.4">
              <img className={styles.containerimg} src="/Fertility Icon WEB.png"/>
              Myth & Fact
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.containerbtn}>
          <div className={styles.containerbtnwrap}>
          <button onClick={handleClickC} className={styles.containerbtns}>Contact Us</button>
          </div>
          <div className={styles.containerbtnwrap}>
          <button  onClick={handleClickA} className={styles.containerbtns}>Altius Cares</button>
          </div>
            {/* <Nav.Link className={styles.containerbtns} href="#home">Contact Us</Nav.Link>
            <Nav.Link className={styles.containerbtns} href="#link">Altius Cares</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  )
}
