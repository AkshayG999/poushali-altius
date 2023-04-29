import React from 'react'
import styles from '../styles/Testimonials.module.css'
import YouTube from 'react-youtube';
export const getServerSideProps = async () => ({
    props: {},
    unstable_revalidate: 1, // Optional: Enable static content generation
  });
  
  export default function Testimonials() {
    const videoId = 'ZrfshZz57tA';
    const opts = {
      playerVars: {
        origin: 'http://localhost:3000'
      }
    };
    return (
        <iframe src="https://www.youtube.com/embed/ZrfshZz57tA">
        <YouTube videoId={videoId} opts={opts} />
        </iframe>
    );
  }
  

