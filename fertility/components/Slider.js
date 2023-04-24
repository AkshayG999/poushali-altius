// import React from 'react'
// import{gql,GraphQLClient} from 'graphql-request'
// import Form from "./form.js"
// import styles from '../styles/Slider.module.css'
// import { Button } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Image from "next/image";
// export const getStaticProps = async()=>{
//     const url="https://api-ap-south-1.hygraph.com/v2/clgfef4yb0cy101t5eon24l0u/master"
//     const graphQLClient = new GraphQLClient(url,{
//         headers:{
//             "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODE0MDk0MDQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NsZ2ZlZjR5YjBjeTEwMXQ1ZW9uMjRsMHUvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImFiZTg3NTVjLWNiZGUtNDVmMS05YzM4LTMwN2VlODcxYTdiNyIsImp0aSI6ImNsZ2ZmcXZrZDBkdWUwMXVnZXV1bTJicHQifQ.LkEn61ojGK3Zuq3lu_i_BVdseQtALChPTd--kAUQAisZXZoEla-TfqW_jSMn4FHi-GJ9DwOXLIg7-a_yFShBXJ_wrHbD5kqicltNZcMV1SA23CYLL-0RResyRgACvXJYpSVYkAUNHY_hmRI48b5C3iWGgStZLK8RGc29pg8csPmWWAGre-dzz1x1XZNTyK14V95dJBiVKTSHtVK14XABdjPhwSY-h-aMO6drAboJMWOjyTfdKSUCm8gz8euLTZTrIY7HXc1fgPsGhBJ8SgUkMcbu0lcsc1skJWf5QXj-N6OlKai4aQoItm9ApuzC9gMcSiRXwPhUz9gIDABhbxt3V76dYTlT9aodYlwC0es1-aO2svepGFqrQ3Afd7lphFSiopIxKodhizs_dLcqHdPG_g7DMlYrojdcCuvgFfNpCC7t9OjiGKIHbCsf46B9hQz0zC1A8CS8gNmuVp7kVk5KJS7Ypdo41-bk17SaV28gghNk78RIBa0Wnm_CxFD8VjdFBC77w9mZMer8zyUSwbnVpGV5RcMLG6qDRkZLJ_speLRBwyZx4NPb_5GzFDKCXXM527rBfzfSqP_4bx0srbHqmtoWskd7si7pG1j7KvLAQDYzvlX9xNQ6R08YRuT36mv6m2pS0wTnXhQJqGkhVL1rbJZeRzZ5gZPSRstXiFuLsOo"
//         }
//     })
    

// const query=gql`
// query{
//     sliders {
//         id,
//         fertilitytext,
//         fertilityCarousel {
//           url
//         }
//       }
//     }
//   `

//   const data=await graphQLClient.request(query)
//   console.log(data)
//   const slider=data.sliders
//   return{
//     props:{
//         slider,
//     }
//   }
// }
// const Slider = ({slider}) => {
//     console.log(slider)
//     return (
//         <div className={styles.container}>
        
//             <Carousel className={styles.slider}>
            
//                 {slider && slider.map(slider => (
                               
//                 <Carousel.Item key={slider.id} className={styles.sliderItem}>
//                 <div>
//                     {fertilitytext}
//                 </div>
//                 <img src={slider&& slider.fertilityCarousel && slider.fertilityCarousel.url} alt="First slide" />
//                 <Form/>
//                 </Carousel.Item>
//                 ))}

            

                
//                     {/* <img
//                         className="d-block w-100"
//                         src="https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                         alt="First slide"
                        
//                     /> */}
                    
//                     {/* <Carousel.Caption className={styles.slidertitle}>
//                         <Form/>
                        
//                     </Carousel.Caption> */}

//                 {/* <Carousel.Item className={styles.sliderItem}>
//                     <img
//                         className="d-block w-100"
//                         src="https://images.pexels.com/photos/5327653/pexels-photo-5327653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                         alt="Second slide"
//                     /> */}

//                     {/* <Carousel.Caption className={styles.slidertitle}>
//                     <form className={styles.sliderform}>
//                             <div className={styles.sliderformtxt}>
//                                 <label for="exampleInputEmail1" className="form-label">Name</label>
//                                 <input type="text" className="form-control" id="exampleInputName" aria-describedby="Name" />
//                             </div>
//                             <div className={styles.sliderformtxt}>
//                                 <label for="exampleInputPhone" className="form-label">Phone</label>
//                                 <input type="text" className="form-control" id="exampleInputPhone" />
//                             </div>
//                             <div className={styles.sliderformtxt}>
//                                 <label for="message" className="form-label">Message</label>
//                                 <input type="text" className="form-control" id="exampleInputMessage" />
//                             </div>
//                             <button type="submit" className={styles.sliderbtn}>Submit</button>
//                         </form>
//                     </Carousel.Caption> */}
//                 {/* </Carousel.Item>
//                 <Carousel.Item className={styles.sliderItem}>
//                     <img
//                         className="d-block w-100"
//                         src="https://images.pexels.com/photos/3993239/pexels-photo-3993239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                         alt="Third slide"
//                     /> */}

//                     {/* <Carousel.Caption className={styles.slidertitle}>
//                     <form className={styles.sliderform}>
//                             <div className={styles.sliderformtxt}>
//                                 <label for="exampleInputEmail1" className="form-label">Name</label>
//                                 <input type="text" className="form-control" id="exampleInputName" aria-describedby="Name" />
//                             </div>
//                             <div className={styles.sliderformtxt}>
//                                 <label for="exampleInputPhone" className="form-label">Phone</label>
//                                 <input type="text" className="form-control" id="exampleInputPhone" />
//                             </div>
//                             <div className={styles.sliderformtxt}>
//                                 <label for="message" className="form-label">Message</label>
//                                 <input type="text" className="form-control" id="exampleInputMessage" />
//                             </div>
//                             <button type="submit" className={styles.sliderbtn}>Submit</button>
//                         </form>
//                     </Carousel.Caption> */}
//                 {/* </Carousel.Item> */}
//             </Carousel>
//         </div>
//     )
// }

// export default Slider




import React from 'react'
import { gql, GraphQLClient } from 'graphql-request'
import Form from "./form.js"
import styles from '../styles/Slider.module.css'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export const getStaticProps = async () => {
  const url = "https://api-ap-south-1.hygraph.com/v2/clgfef4yb0cy101t5eon24l0u/master"
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization": "Bearer "
    }
  })

  const query = gql`
    query {
      sliders {
        id
        fertilitytext
        fertilityCarousel {
          url
        }
      }
    }
  `

  const data = await graphQLClient.request(query)
  console.log(data)
  const slider = data.sliders
  return {
    props: {
      slider,
    }
  }
}

const Slider = ({ slider }) => {
  console.log(slider)
  return (
    <div className={styles.container}>
      <Carousel className={styles.slider}>
        {slider && slider.map(slide => (
          <Carousel.Item key={slide.id} className={styles.sliderItem}>
            <div>
              {slide.fertilitytext}
            </div>
            <img src={slide.fertilityCarousel[0].url} alt="First slide" />
            <Form />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
