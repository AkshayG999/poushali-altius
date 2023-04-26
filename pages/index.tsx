import { gql, GraphQLClient } from 'graphql-request'
// import Carousel from "react-multi-carousel";
import NavbarF from '@/components/Navbar'
// import Slider from '@/components/Slider'
import SliderDemo from '@/components/SliderDemo'
import Banner from '@/components/Banner'
import Keypoints from '@/components/Keypoints'
import Services from '@/components/Keypointtable'

import temp from '@/components/temp'
import BannerDoc from '@/components/Doctor'
import DoctorCarousel from '@/components/DoctorCarousel'
import Footer from '@/components/Footer'
import Footermain from '@/components/Footermain'
// import ImageCarousel from '../src/component/Carousel/ImageCarousel'
// import Carousel from './Carousel.js'
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
// import apolloClient from "lib/apollo-graphcms";
import Link from "next/link";
import React from "react";
// import { gql } from "@apollo/client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
// import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import styles from '../styles/DoctorCarousel.module.css'

// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';




export const getStaticProps = async () => {
  const url = process.env.ENDPOINT || "https://boongg.com";

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": process.env.GRAPH_CMS_TOKEN || ""
    }
  })


  const query = gql`
query{
  doctors{
    id,
    name,
    designation,
    education,
    slug,
    available,
    websiteurl,
    docimage{
      url
    }

  }
}
  `
  // type DoctorData = {
  //   doctors: Array<object> // Replace `any` with the actual type of your doctor object
  // }
  type DoctorData = {
    doctors: Doctor[]
  };

  const data = await graphQLClient.request(query) as DoctorData;

  console.log(data)
  const doctors = data.doctors
  return {
    props: {
      doctors,
    }
  }
}

interface Doctor {
  name: string;
  specialty: string;
  designation: string;
  education: string;
  slug: string;
  available: string;
  docimage:  string;
  websiteurl: string;

}

const Home = ({ doctors }: { doctors: Doctor[] }) => {

  const handleClickD = (websiteurl: string) => {
    window.open(websiteurl, '_blank');
  };


  console.log(doctors)
  const redirectUrl = 'https://altiushospital.com/our-doctors/';

  const handleClick = () => {
    window.location.href = redirectUrl;
  }

  return (

    <div>
      <NavbarF />
      <SliderDemo />
      <Banner />
      <BannerDoc />
      <div className={styles.swipewrapper}>
        <div className={styles.swipewrapper}>
          <h1 className={styles.heading}>Our Fertility Experts</h1>
        </div>
        {doctors && doctors.map(doctors => (
          <div key={doctors.id} className={styles.wrapper}>
            <div>
            <img src={doctors&& doctors.docimage && doctors.docimage.url ||""} className={styles.imgd} alt="slide_image" />

            </div>
            <div className={styles.drdetailswrap}>
              <section className={styles.drwrap}>
                <h1 className={styles.drname}>{doctors.name}</h1>
                <p className={styles.drdetails}>{doctors.designation}</p>
                <p className={styles.dredu}>{doctors.education}</p>
              </section>
              <button onClick={() => handleClickD(doctors.websiteurl)} className={styles.btnD}>Book Appointment</button>

            </div>
          </div>
        ))}
      </div>
      {/* <temp/> */}
      <Keypoints />
      {/* <Services/> */}

      <Footermain />
      <Footer />


    </div>
  )
}


export default Home

