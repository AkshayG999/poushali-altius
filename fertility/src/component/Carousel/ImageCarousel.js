import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import './Carousel.css'
// import styles from './Carousel.module.css'
const images = [
  'https://www.jalashmanhospital.com/images/our-work/pic5.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnN4yLic-oO-G_i74_uuFuZhSa8xf4G-uYnueSMeSEZJJrEowjxxyhdSIaT9nceMqffs&usqp=CAU',
  'https://st.depositphotos.com/1017986/2663/i/950/depositphotos_26630763-stock-photo-patient-and-doctor-taking-notes.jpg',
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function ImageCarousel() {
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div className='img' key={image}>
          <img src={image} alt="carousel-img" className='img'/>
        </div>
      ))}
    </Slider>
  );
}
export default ImageCarousel;