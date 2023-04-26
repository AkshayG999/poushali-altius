// // import React from 'react';
import Image from 'next/image'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
// import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import styles from '../styles/DoctorCarousel.module.css'

// // import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom'
// import React, { useState } from 'react';
// import { Redirect } from 'react-router-dom';
// // import slide_image_1 from './assets/images/SR.png';
// // import slide_image_2 from './assets/images/SR.png';
// // import slide_image_3 from './assets/images/SR.png';
// // import slide_image_4 from './assets/images/SR.png';
// // import slide_image_5 from './assets/images/SR.png';
// // import slide_image_6 from './assets/images/SR.png';
// // import slide_image_7 from './assets/images/SR.png';

// export const getStaticProps = async()=>{
//   const url="https://api-ap-south-1.hygraph.com/v2/clgfef4yb0cy101t5eon24l0u/master"
//   const graphQLClient = new GraphQLClient(url,{
//       headers:{
//           "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODE0MDk0MDQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZ2ZlZjR5YjBjeTEwMXQ1ZW9uMjRsMHUvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImFiZTg3NTVjLWNiZGUtNDVmMS05YzM4LTMwN2VlODcxYTdiNyIsImp0aSI6ImNsZ2ZmcXZrZDBkdWUwMXVnZXV1bTJicHQifQ.LkEn61ojGK3Zuq3lu_i_BVdseQtALChPTd--kAUQAisZXZoEla-TfqW_jSMn4FHi-GJ9DwOXLIg7-a_yFShBXJ_wrHbD5kqicltNZcMV1SA23CYLL-0RResyRgACvXJYpSVYkAUNHY_hmRI48b5C3iWGgStZLK8RGc29pg8csPmWWAGre-dzz1x1XZNTyK14V95dJBiVKTSHtVK14XABdjPhwSY-h-aMO6drAboJMWOjyTfdKSUCm8gz8euLTZTrIY7HXc1fgPsGhBJ8SgUkMcbu0lcsc1skJWf5QXj-N6OlKai4aQoItm9ApuzC9gMcSiRXwPhUz9gIDABhbxt3V76dYTlT9aodYlwC0es1-aO2svepGFqrQ3Afd7lphFSiopIxKodhizs_dLcqHdPG_g7DMlYrojdcCuvgFfNpCC7t9OjiGKIHbCsf46B9hQz0zC1A8CS8gNmuVp7kVk5KJS7Ypdo41-bk17SaV28gghNk78RIBa0Wnm_CxFD8VjdFBC77w9mZMer8zyUSwbnVpGV5RcMLG6qDRkZLJ_speLRBwyZx4NPb_5GzFDKCXXM527rBfzfSqP_4bx0srbHqmtoWskd7si7pG1j7KvLAQDYzvlX9xNQ6R08YRuT36mv6m2pS0wTnXhQJqGkhVL1rbJZeRzZ5gZPSRstXiFuLsOo"
//       }
//   })
  

// const query=gql`
// query{
//   doctors{
//     id,
//     name,
//     designation,
//     education,
//     slug,
//     available,
//   }
// }
// `

// const data=await graphQLClient.request(query)
// // console.log(data)
// const doctors=data.doctors
// return{
//   props:{
//       doctors,
//   }
// }
// }

// function DoctorCarousel({doctors}) {
//   console.log(doctors)
//   const [data, setData] = useState([]);
//   // const [shouldRedirect, setShouldRedirect] = useState(false);

//   // const handleButtonClick = () => {
//   //   setShouldRedirect(true);
//   // };

//   // if (shouldRedirect) {
//   //   return <Redirect to="https://altiushospital.com/doctors/dr-b-ramesh/" />;
//   // } 

//   return (
//     <div className={styles.swipewrapper}>
//     <div className={styles.containerswipe}>
//       <h1 className={styles.heading}>Our Fertility Experts</h1>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{  clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className={styles.swipercontainer}

//       >
//       {!!doctors && Array.isArray(doctors) && doctors.map((data) => (
        
        
//         <SwiperSlide key={data.id}>
        
//           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" className={styles.imgd} alt="slide_image" />
//           <div className={styles.drdetailswrap}>
//           <section className={styles.drwrap}>
//           <h1 className={styles.drname}>Dr.B Ramesh</h1>
//           <p className={styles.drdetails}></p>
//           <p className={styles.dredu}>MBBS, MD – OBG, DGO,FCPS –General Surgery</p>
//           </section>
//           <button className={styles.btnD}>Book Appointment</button>
//           {/* <Link to="https://altiushospital.com/doctors/dr-b-ramesh/" className={styles.btnD}>Book Appointment</Link> */}
//           {/* <button className={styles.btnD} onClick={handleButtonClick}>Book Appointment</button> */}
//           {/* <button className={styles.btnD} onClick={() => handleProfileClick(doctor.id)}>Book Appointment</button> */}

//           </div>
//         </SwiperSlide>
//         ))}
//         <SwiperSlide>
//           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" className={styles.imgd} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" className={styles.imgd} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" className={styles.imgd} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" className={styles.imgd} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" className={styles.imgd} alt="slide_image" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg" className={styles.imgd} alt="slide_image" />
//         </SwiperSlide>

//         <div className={styles.slidercontroler}>
//           <div className={styles.swiperbuttonprev}>
//             <KeyboardArrowLeftRoundedIcon/>
//           </div>
//           <div className={styles.swiperbuttonnext}>
//           <KeyboardArrowRightRoundedIcon/>
//           </div>
//           <div className={styles.swiperpagination}></div>
//         </div>
//       </Swiper>
//     </div>
//     </div>
//   );
// }

// export default DoctorCarousel;


import React from 'react'

import styles from '../styles/demo.module.css'
import{gql,GraphQLClient} from 'graphql-request'



export const getStaticProps = async()=>{
    const url="https://api-ap-south-1.hygraph.com/v2/clgfef4yb0cy101t5eon24l0u/master"
    const graphQLClient = new GraphQLClient(url,{
        headers:{
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODE0MDk0MDQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZ2ZlZjR5YjBjeTEwMXQ1ZW9uMjRsMHUvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImFiZTg3NTVjLWNiZGUtNDVmMS05YzM4LTMwN2VlODcxYTdiNyIsImp0aSI6ImNsZ2ZmcXZrZDBkdWUwMXVnZXV1bTJicHQifQ.LkEn61ojGK3Zuq3lu_i_BVdseQtALChPTd--kAUQAisZXZoEla-TfqW_jSMn4FHi-GJ9DwOXLIg7-a_yFShBXJ_wrHbD5kqicltNZcMV1SA23CYLL-0RResyRgACvXJYpSVYkAUNHY_hmRI48b5C3iWGgStZLK8RGc29pg8csPmWWAGre-dzz1x1XZNTyK14V95dJBiVKTSHtVK14XABdjPhwSY-h-aMO6drAboJMWOjyTfdKSUCm8gz8euLTZTrIY7HXc1fgPsGhBJ8SgUkMcbu0lcsc1skJWf5QXj-N6OlKai4aQoItm9ApuzC9gMcSiRXwPhUz9gIDABhbxt3V76dYTlT9aodYlwC0es1-aO2svepGFqrQ3Afd7lphFSiopIxKodhizs_dLcqHdPG_g7DMlYrojdcCuvgFfNpCC7t9OjiGKIHbCsf46B9hQz0zC1A8CS8gNmuVp7kVk5KJS7Ypdo41-bk17SaV28gghNk78RIBa0Wnm_CxFD8VjdFBC77w9mZMer8zyUSwbnVpGV5RcMLG6qDRkZLJ_speLRBwyZx4NPb_5GzFDKCXXM527rBfzfSqP_4bx0srbHqmtoWskd7si7pG1j7KvLAQDYzvlX9xNQ6R08YRuT36mv6m2pS0wTnXhQJqGkhVL1rbJZeRzZ5gZPSRstXiFuLsOo"
        }
    })
    

const query=gql`
query{
  doctors{
    id,
    name,
    designation,
    education,
    slug,
    available,
    docimage{
      url
    }

  }
}
  `
  

  const data=await graphQLClient.request(query)
  console.log(data)
  const doctors=data.doctors
  return{
    props:{
        doctors,
    }
  }
}

const DoctorCarousel = ({doctors}) => {
  const redirectUrl = 'https://altiushospital.com/our-doctors/';

  const handleClick = () => {
    window.location.href = redirectUrl;
  }
  return (
    <div>
          {doctors && doctors.map(doctors => (
    <div key={doctors.id} className={styles.wrapper}>
      <div>
      <Image src={doctors&& doctors.docimage && doctors.docimage.url} className={styles.imgd} alt="slide_image" />
      </div>
      <div className={styles.drdetailswrap}>
              <section className={styles.drwrap}>
              <h1 className={styles.drname}>{doctors.name}</h1>
              <p className={styles.drdetails}>{doctors.designation}</p>
              <p className={styles.dredu}>{doctors.education}</p>
              </section>
              <button onClick={handleClick} className={styles.btnD}>Book Appointment</button>
    
        </div>
    </div>
       ))}
    </div>
  )
}

export default DoctorCarousel



