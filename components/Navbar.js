import { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from 'next/image'

export default function TreatmentsDropdown() {
    const [selectedOption, setSelectedOption] = useState('male');
    const [keepOpen, setKeepOpen] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setKeepOpen(true);
    };

    const redirectUrl = 'https://fertilityhospital.vercel.app/male/maleinfertility';

    const handleClick = () => {
        window.location.href = redirectUrl;
    }
    const redirectUrlf = 'https://fertilityhospital.vercel.app/female/femaleinfertility';

    const handleClickf = () => {
        window.location.href = redirectUrlf;
    }
    const redirectUrla = 'https://fertilityhospital.vercel.app/advanced/advance';

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

    // ---------------about us-----------------

    const redirectUrlvm = 'https://altiushospital.com/our-vision-and-mission/';

    const handleClickvm = () => {
        window.location.href = redirectUrlvm;
    }
    const redirectUrlm = 'https://altiushospital.com/management/';

    const handleClickm = () => {
        window.location.href = redirectUrlm;
    }
    const redirectUrlcsr = 'https://altiushospital.com/corporate-social-responsibility/';

    const handleClickcsr = () => {
        window.location.href = redirectUrlcsr;
    }
    const redirectUrlmc = 'https://altiushospital.com/awards/';

    const handleClickmc = () => {
        window.location.href = redirectUrlmc;
    }
    const redirectUrlaw = 'https://altiushospital.com/awards/';

    const handleClickaw = () => {
        window.location.href = redirectUrlaw;
    }

    // ------------- resources--------------//

    const redirectUrlb = 'https://altiushospital.com/blog2/';

    const handleClickb = () => {
        window.location.href = redirectUrlb;
    }
    const redirectUrlv = 'https://altiushospital.com/video-gallery/';

    const handleClickv = () => {
        window.location.href = redirectUrlv;
    }
    // const redirectUrlfaq = 'https://altiushospital.com/awards/';

    // const handleClickfaq = () => {
    //     window.location.href = redirectUrlfaq;
    // }
    // const redirectUrlmf = 'https://altiushospital.com/awards/';

    // const handleClickmf = () => {
    //     window.location.href = redirectUrlmf;
    // }
    
    
    
    return (
        <div className={styles.containernav}>
            <Navbar bg="light" expand="lg">
                <Container className={styles.containerwrap}>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <div className={styles.containerlogowrap}>
                        <Link className={styles.containerlinklogo} href="https://fertilityhospital.vercel.app/">
                            <Image
                                src="/Altius Fertility Logo.png"
                                alt="My Image"
                                width={150}
                                height={60}
                                className={styles.containerlogo}
                            />
                        </Link>
                    </div>
                    <Navbar bg="light" expand="lg" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navwrap} />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className={styles.mrauto}>
                                <NavDropdown className={styles.containertitle} title="About us" id="basicnavdropdown">
                                    <NavDropdown.Item onClick={handleClickm} className={styles.containerItemlist} href="#action/3.1">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Founders & Directors</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickvm} className={styles.containerItemlist} href="#action/3.2">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Vission & Mission
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickcsr} className={styles.containerItemlist} href="#action/3.3">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        CSR
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickmc} className={styles.containerItemlist} href="#action/3.3">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Mc
                                    </NavDropdown.Item>
                                    
                                    <NavDropdown.Item onClick={handleClickaw} className={styles.containerItemlist} href="#action/3.4">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Awards
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown
                                    className={styles.containertitle}
                                    title="Treatments"
                                    id="basic-nav-dropdown"
                                    show={keepOpen}
                                    onMouseEnter={() => setKeepOpen(true)}
                                    onMouseLeave={() => setKeepOpen(false)}
                                >
                                    <div className={styles.containerItemhwrapper}>
                                        <NavDropdown.Item activee={selectedOption === 'male'} className={styles.containerItemh} onClick={() => handleOptionSelect('male')}>
                                            <Image
                                                src="/fertility icon transparent.png"
                                                alt="My Image"
                                                width={40}
                                                height={40}
                                                className={styles.containerimg}
                                            />
                                            Male
                                        </NavDropdown.Item>
                                        <NavDropdown.Item activee={selectedOption === 'female'} className={styles.containerItemh} onClick={() => handleOptionSelect('female')}>
                                            <Image
                                                src="/fertility icon transparent.png"
                                                alt="My Image"
                                                width={40}
                                                height={40}
                                                className={styles.containerimg}
                                            />
                                            Female
                                        </NavDropdown.Item>
                                        <NavDropdown.Item activee={selectedOption === 'advanced'} className={styles.containerItemh} onClick={() => handleOptionSelect('advanced')}>
                                            <Image
                                                src="/fertility icon transparent.png"
                                                alt="My Image"
                                                width={40}
                                                height={40}
                                                className={styles.containerimg}
                                            />
                                            Advanced
                                        </NavDropdown.Item>
                                    </div>
                                    <NavDropdown.Divider />
                                    {selectedOption === 'male' && (
                                        <div className={styles.containerItemwrap}>
                                            <div className={styles.containerItemgrid}>
                                                <NavDropdown.Item onClick={handleClick} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Varicocele transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Varicocele
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClick} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/TESA_PESA transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    CASA
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClick} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Andrology Services transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Andrology
                                                </NavDropdown.Item>
                                            </div>
                                            <div className={styles.containerItemgrid}>
                                                <NavDropdown.Item onClick={handleClick} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/TESA_PESA transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    TESA/PESA
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClick} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Semen Freezing transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Semen Freezing
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClick} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Sperm Donation transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    sperm Donation
                                                </NavDropdown.Item>
                                            </div>
                                        </div>
                                    )}
                                    {selectedOption === 'female' && (
                                        <div className={styles.containerItemwrap}>
                                            <div className={styles.containerItemgrid}>
                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/OI_IT transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    OI/IT
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/ICSI transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    ICSI
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/IUI transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    IUI
                                                </NavDropdown.Item>
                                            </div>
                                            <div className={styles.containerItemgrid}>
                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/FET transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />


                                                    FET
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/IVF transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    IVF
                                                </NavDropdown.Item>

                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Laparoscopy transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Laparoscopy
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Hysteroscopy transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Hysteroscopy
                                                </NavDropdown.Item>
                                            </div>
                                            <div className={styles.containerItemgrid}>
                                            <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Surrogacy transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Surrogacy
                                                </NavDropdown.Item>

                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Egg Donation transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Egg donation
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClickf} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Embryo Donation transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Embryo Donation
                                                </NavDropdown.Item>
                                            </div>

                                        </div>
                                    )}
                                    {selectedOption === 'advanced' && (
                                        <div className={styles.containerItemwrap}>
                                            <div className={styles.containerItemgrid}>
                                                <NavDropdown.Item onClick={handleClicka} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Freezing or Preservation transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Preservation
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClicka} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/MACS transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    MACS
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClicka} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/PICSI transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    PICSI
                                                </NavDropdown.Item>
                                            </div>
                                            <div className={styles.containerItemgrid}>
                                                <NavDropdown.Item onClick={handleClicka} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Sequential Transfer transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Sequential transfer
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClicka} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Endometrial Rejuvenation transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Endometrial
                                                </NavDropdown.Item>
                                                <NavDropdown.Item onClick={handleClicka} className={styles.containerIteminfertility} href="#action/3.1">
                                                    <Image
                                                        src="/Sequential Transfer transparent.png"
                                                        alt="My Image"
                                                        width={40}
                                                        height={40}
                                                        className={styles.containerimg}
                                                    />
                                                    Rejuvenation
                                                </NavDropdown.Item>
                                            </div>
                                        </div>
                                    )}
                                </NavDropdown>
                                {/*---------------- Cost-------------- */}
                                <NavDropdown className={styles.containertitle} title="Cost" id="basic-nav-dropdown">
                                    <NavDropdown.Item className={styles.containerItemlist} href="#action/3.1">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Cost 1
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} href="#action/3.2">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Cost 2
                                    </NavDropdown.Item>


                                </NavDropdown>
                                {/*---------------- Resources-------------- */}
                                <NavDropdown className={styles.containertitle} title="Resources" id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={handleClickb} className={styles.containerItemlist} href="#action/3.1">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Blogs
                                    </NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleClickv} className={styles.containerItemlist} href="#action/3.2">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Videos
                                    </NavDropdown.Item>
                                    <NavDropdown.Item className={styles.containerItemlist} href="#action/3.3">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        FAQs
                                    </NavDropdown.Item>
                                    
                                    <NavDropdown.Item className={styles.containerItemlist} href="#action/3.4">
                                        <Image
                                            src="/fertility icon transparent.png"
                                            alt="My Image"
                                            width={40}
                                            height={40}
                                            className={styles.containerimg}
                                        />
                                        {/* <img className={styles.containerimg} src="/fertility icon transparent.png"/> */}
                                        Myth & Fact
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Navbar.Collapse>
                        <div className={styles.containerbtnwrappers}>
                            <div className={styles.containerbtnwrap}>
                                <button onClick={handleClickC} className={styles.containerbtns}>Contact Us</button>
                            </div>
                            <div className={styles.containerbtnwrap}>
                                <button onClick={handleClickA} className={styles.containerbtns}>Altius Cares</button>
                            </div>
                        </div>
                    </Navbar>

                </Container>
            </Navbar>
        </div>
    );
}





