import React from 'react'
import styles from '../../../styles/treatments.module.css'
import NavbarF from '@/components/Navbar'
import Footer from '@/components/Footer'
import Aboutus from '@/components/Aboutus'
import Footermain from '@/components/Footermain'
import Faq from '@/components/Faqs'
import Image from "next/image";
import Card from 'react-bootstrap/Card';
const eggdonation = () => {
  return (
    <div className={styles.body}>
    <NavbarF/>
      <div className={styles.bannerwrapper}>
        <h1 className={styles.headingl}>Egg Donation</h1>
        <div className={styles.limgwrapper}>
        <Image src="/Egg donation Banner Web.png"
                className={styles.limgwrap}
                alt="My image"
                width={1200}
                height={550}
                    />
        </div>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"Chances of pregnancy in IVF with egg donation?"}</h2>
        <p className={styles.piuiwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia? Non totam error sit molestiae temporibus id asperiores dolor qui atque illo vel omnis aliquam. Et illo nobis et quaerat aliquid in fugit quibusdam a molestiae veritatis. In voluptas saepe eum voluptatem consectetur aut eligendi sint qui dolor obcaecati 33 consequatur accusantium eos autem aliquam.Quo dolorum quae eum rerum commodi ad quasi similique eos veniam fuga et quisquam nulla ea ullam eaque. Vel modi quam sit omnis asperiores rem assumenda accusantium id quia aspernatur At velit quia. Qui illo dignissimos sit error quia ut rerum minima aut amet consectetur est corrupti possimus nam numquam tempore.Est temporibus architecto qui beatae libero non veniam voluptas quo sunt maiores aut error veniam qui labore magnam aut possimus nisi. Eum mollitia recusandae et consequatur temporibus et aspernatur saepe est dicta consectetur et laborum maxime id consectetur quia"}</p>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"What is Egg donation?"}</h2>
        <p className={styles.piuiwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia? Non totam error sit molestiae temporibus id asperiores dolor qui atque illo vel omnis aliquam. Et illo nobis et quaerat aliquid in fugit quibusdam a molestiae veritatis. In voluptas saepe eum voluptatem consectetur aut eligendi sint qui dolor obcaecati 33 consequatur accusantium eos autem aliquam.Quo dolorum quae eum rerum commodi ad quasi similique eos veniam fuga et quisquam nulla ea ullam eaque. Vel modi quam sit omnis asperiores rem assumenda accusantium id quia aspernatur At velit quia. Qui illo dignissimos sit error quia ut rerum minima aut amet consectetur est corrupti possimus nam numquam tempore.Est temporibus architecto qui beatae libero non veniam voluptas quo sunt maiores aut error veniam qui labore magnam aut possimus nisi. Eum mollitia recusandae et consequatur temporibus et aspernatur saepe est dicta consectetur et laborum maxime id consectetur quia"}</p>
      </div>
      <div className={styles.detailswrapper}>
      <h2 className={styles.headingiui}>{"In what conditions, are egg donation is required?"}</h2>
        <ul type="circle" className={styles.listwrappers}>
        
        <span className={styles.span}>Non-functional Ovaries</span>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        
        
        <span className={styles.span}>Functional Ovaries</span>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        </ul>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"Who are the egg donors?"}</h2>
        <p className={styles.piuiwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia?"}</p>
        <span className={styles.spanwrap}>{"In an Egg donation IVF program, donor eggs can come in various ways that are:"}</span>
        <ul type="circle">
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        </ul>

      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"Details of the egg donation process"}</h2>
        <ul type="circle" >
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        </ul>
        
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"Chances of pregnancy with egg donation"}</h2>
        <p className={styles.spanwrap}>{"The success of the egg donation IVF cycle depends upon a number of factors:"}</p>
        <ul type="circle">
        <li><span className={styles.spanwrap}>{"Ages of donor:"}</span>{"Lorem ipsum dolor sit amet."}</li>
        <li><span className={styles.spanwrap}>{"Egg quality:"}</span>{"Lorem ipsum dolor sit amet."}</li>
        <li><span className={styles.spanwrap}>{"Endometrial Receptivity:"}</span>{"Lorem ipsum dolor sit amet."}</li>
        <li><span className={styles.spanwrap}>{"Embryo transfer:"}</span>{"Lorem ipsum dolor sit amet."}</li>
        </ul>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"Advantages of donor egg"}</h2>
        <p className={styles.spanwrap}>{"Especially in older recipients"}</p>
        <ul type="circle">
        <li >{"Lorem ipsum dolor sit amet."}</li>
        <li >{"Lorem ipsum dolor sit amet."}</li>
        </ul>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"Risk of using donor eggs"}</h2>
        
        <ul type="circle">
        <li >{"Lorem ipsum dolor sit amet."}</li>

        </ul>
        <p className={styles.piuiwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia?"}</p>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"To Conclude"}</h2>
        
        <ul type="circle">
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        </ul>
      </div>

    <Aboutus/>
    <Faq/>
    <Footer/>
    <Footermain/>
      
    </div>
  )
}

export default eggdonation
