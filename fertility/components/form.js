import {React,useRef} from 'react'
import styles from '../styles/Slider.module.css'
// import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'


export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <div className={styles.containerform}>
<form ref={form} onSubmit={sendEmail} className={styles.sliderform}>
    <div className={styles.sliderformtxt}>
        <label for="exampleInputEmail1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputName" aria-describedby="Name" />
    </div>
    <div className={styles.sliderformtxt}>
        <label for="exampleInputPhone" className="form-label">Phone</label>
        <input type="text" className="form-control" id="exampleInputPhone" />
    </div>
    <div className={styles.sliderformtxt}>
        <label for="message" className="form-label">Message</label>
        <input type="text" className="form-control" id="exampleInputMessage" />
    </div>
    <button type="submit" value="Send" className={styles.sliderbtn}>Submit</button>
</form>

        </div>
    )
}
