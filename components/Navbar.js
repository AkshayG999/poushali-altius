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
    const redirectUrlaw = 'https://altiushospital.com/awards/';

    const handleClickaw = () => {
        window.location.href = redirectUrlaw;
    }


    // -------------------Treatments-----------------------//

        // ..................MALE....................//
    const redirectUrlandro = 'https://fertilityhospital.vercel.app/treatments/male/andrology';

    const handleClickandro = () => {
        window.location.href = redirectUrlandro;
    }
    const redirectUrlcasa = 'https://fertilityhospital.vercel.app/treatments/male/casa';

    const handleClickcasa = () => {
        window.location.href = redirectUrlcasa;
    }
    const redirectUrlsf = 'https://fertilityhospital.vercel.app/treatments/male/semen-freezing';

    const handleClicksf = () => {
        window.location.href = redirectUrlsf;
    }
    const redirectUrlsd = 'https://fertilityhospital.vercel.app/treatments/male/sperm-donation';

    const handleClicksd = () => {
        window.location.href = redirectUrlsd;
    }
    const redirectUrltp = 'https://fertilityhospital.vercel.app/treatments/male/tesa-pesa';

    const handleClicktp = () => {
        window.location.href = redirectUrltp;
    }
    const redirectUrlvc = 'https://fertilityhospital.vercel.app/treatments/male/varicocele';

    const handleClickvc = () => {
        window.location.href = redirectUrlvc;
    }
    // ..................FEMALE....................//
    const redirectUrled = 'https://fertilityhospital.vercel.app/treatments/female/egg-donation';

    const handleClicked = () => {
        window.location.href = redirectUrled;
    }
    const redirectUrlemd = 'https://fertilityhospital.vercel.app/treatments/female/embryo-donation';

    const handleClickemd = () => {
        window.location.href = redirectUrlemd;
    }
    const redirectUrlfet = 'https://fertilityhospital.vercel.app/treatments/female/fet';

    const handleClickfet = () => {
        window.location.href = redirectUrlfet;
    }
    const redirectUrlh = 'https://fertilityhospital.vercel.app/treatments/female/hysteroscopy';

    const handleClickh = () => {
        window.location.href = redirectUrlh;
    }
    const redirectUrlicsi = 'https://fertilityhospital.vercel.app/treatments/female/icsi';

    const handleClickicsi = () => {
        window.location.href = redirectUrlicsi;
    }
    const redirectUrliui = 'https://fertilityhospital.vercel.app/treatments/female/iui';

    const handleClickiui = () => {
        window.location.href = redirectUrliui;
    }
    const redirectUrlivf = 'https://fertilityhospital.vercel.app/treatments/female/ivf';

    const handleClickivf = () => {
        window.location.href = redirectUrlivf;
    }
    const redirectUrllp = 'https://fertilityhospital.vercel.app/treatments/female/laparoscopy';

    const handleClicklp = () => {
        window.location.href = redirectUrllp;
    }
    const redirectUrloi = 'https://fertilityhospital.vercel.app/treatments/female/oi-it';

    const handleClickoi = () => {
        window.location.href = redirectUrloi;
    }
    const redirectUrlsg = 'https://fertilityhospital.vercel.app/treatments/female/surrogacy';

    const handleClicksg = () => {
        window.location.href = redirectUrlsg;
    }


    // ..................ADVANCED....................//
    const redirectUrler = 'https://fertilityhospital.vercel.app/treatments/advanced/endometrial-rejuvenation';

    const handleClicker = () => {
        window.location.href = redirectUrler;
    }
    const redirectUrlmacs = 'https://fertilityhospital.vercel.app/treatments/advanced/macs';
    
    const handleClickmacs = () => {
        window.location.href = redirectUrlmacs;
    }
    const redirectUrlpc = 'https://fertilityhospital.vercel.app/treatments/advanced/picsi';
    
    const handleClickpc = () => {
        window.location.href = redirectUrlpc;
    }
    const redirectUrlps = 'https://fertilityhospital.vercel.app/treatments/advanced/preservation';
    
    const handleClickps = () => {
        window.location.href = redirectUrlps;
    }
    const redirectUrlst = 'https://fertilityhospital.vercel.app/treatments/advanced/sequential-transfer';
    
    const handleClickst = () => {
        window.location.href = redirectUrlst;
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

                                    <div className={styles.containerItemhwrapper }>
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

                                            <NavDropdown.Item onClick={handleClickvc} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Varicocele transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Varicocele
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickcasa} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/TESA_PESA transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                CASA
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={redirectUrlandro} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Andrology Services transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Andrology
                                            </NavDropdown.Item>

                                            <NavDropdown.Item onClick={handleClicktp} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/TESA_PESA transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                TESA/PESA
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClicksf} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Semen Freezing transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Semen Freezing
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClicksd} className={styles.containerIteminfertility} href="#action/3.1">
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
                                    )}
                                    {selectedOption === 'female' && (
                                        <div className={styles.containerItemwrap}>

                                            <NavDropdown.Item onClick={handleClickoi} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/OI_IT transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                OI/IT
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickicsi} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/ICSI transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                ICSI
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickiui} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/IUI transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                IUI
                                            </NavDropdown.Item>

                                            <NavDropdown.Item onClick={handleClickfet} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/FET transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />


                                                FET
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickivf} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/IVF transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                IVF
                                            </NavDropdown.Item>

                                            <NavDropdown.Item onClick={handleClicklp} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Laparoscopy transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Laparoscopy
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickh} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Hysteroscopy transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Hysteroscopy
                                            </NavDropdown.Item>

                                            <NavDropdown.Item onClick={handleClicksg} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Surrogacy transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Surrogacy
                                            </NavDropdown.Item>

                                            <NavDropdown.Item onClick={handleClicked} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Egg Donation transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Egg donation
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickemd} className={styles.containerIteminfertility} href="#action/3.1">
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
                                    )}
                                    {selectedOption === 'advanced' && (
                                        <div className={styles.containerItemwrap}>

                                            <NavDropdown.Item onClick={handleClickps} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Freezing or Preservation transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Preservation
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickmacs} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/MACS transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                MACS
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClicker} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Endometrial Rejuvenation transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Endometrial Rejuvenation
                                            </NavDropdown.Item>

                                            <NavDropdown.Item onClick={handleClickst} className={styles.containerIteminfertility} href="#action/3.1">
                                                <Image
                                                    src="/Sequential Transfer transparent.png"
                                                    alt="My Image"
                                                    width={40}
                                                    height={40}
                                                    className={styles.containerimg}
                                                />
                                                Sequential transfer
                                            </NavDropdown.Item>
                                            <NavDropdown.Item onClick={handleClickpc} className={styles.containerIteminfertility} href="#action/3.1">
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





