import React from 'react'
import styles from '../../../styles/treatments.module.css'
import NavbarF from '@/components/Navbar'
import Footer from '@/components/Footer'
import Aboutus from '@/components/Aboutus'
import Footermain from '@/components/Footermain'
import Faq from '@/components/Faqs'
import Image from "next/image";
import Card from 'react-bootstrap/Card';
const tesapesa = () => {
  return (
    <div className={styles.body}>
    <NavbarF/>
      <div className={styles.bannerwrapper}>
        <h1 className={styles.headingl}>TESA/PESA</h1>
        <div className={styles.limgwrapper}>
        <Image src="/tesa pesa Banner Web.png"
                className={styles.limgwrap}
                alt="My image"
                width={1200}
                height={550}
                    />
        
        </div>
        <p className={styles.phwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia? Non totam error sit molestiae temporibus id asperiores dolor qui atque illo vel omnis aliquam. Et illo nobis et quaerat aliquid in fugit quibusdam a molestiae veritatis. In voluptas saepe eum voluptatem consectetur aut eligendi sint qui dolor obcaecati 33 consequatur accusantium eos autem aliquam.Quo dolorum quae eum rerum commodi ad quasi similique eos veniam fuga et quisquam nulla ea ullam eaque. Vel modi quam sit omnis asperiores rem assumenda accusantium id quia aspernatur At velit quia. Qui illo dignissimos sit error quia ut rerum minima aut amet consectetur est corrupti possimus nam numquam tempore.Est temporibus architecto qui beatae libero non veniam voluptas quo sunt maiores aut error veniam qui labore magnam aut possimus nisi. Eum mollitia recusandae et consequatur temporibus et aspernatur saepe est dicta consectetur et laborum maxime id consectetur quia"}</p>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"Male-factor infertility"}</h2>
        <p className={styles.piuiwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia? Non totam error sit molestiae temporibus id asperiores dolor qui atque illo vel omnis aliquam. Et illo nobis et quaerat aliquid in fugit quibusdam a molestiae veritatis. In voluptas saepe eum voluptatem consectetur aut eligendi sint qui dolor obcaecati 33 consequatur accusantium eos autem aliquam.Quo dolorum quae eum rerum commodi ad quasi similique eos veniam fuga et quisquam nulla ea ullam eaque. Vel modi quam sit omnis asperiores rem assumenda accusantium id quia aspernatur At velit quia. Qui illo dignissimos sit error quia ut rerum minima aut amet consectetur est corrupti possimus nam numquam tempore.Est temporibus architecto qui beatae libero non veniam voluptas quo sunt maiores aut error veniam qui labore magnam aut possimus nisi. Eum mollitia recusandae et consequatur temporibus et aspernatur saepe est dicta consectetur et laborum maxime id consectetur quia"}</p>
        <span className={styles.spant}>{"Sperm retrieval surgically is a possibility in the following cases:"}</span>
        <ul type="circle" className={styles.listwrappers}>
        
        
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
        <li>{"Lorem ipsum dolor sit amet."}</li>
       
        </ul>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"What is PESA?"}</h2>
        <p className={styles.piuiwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia? Non totam error sit molestiae temporibus id asperiores dolor qui atque illo vel omnis aliquam. Et illo nobis et quaerat aliquid in fugit quibusdam a molestiae veritatis. In voluptas saepe eum voluptatem consectetur aut eligendi sint qui dolor obcaecati 33 consequatur accusantium eos autem aliquam.Quo dolorum quae eum rerum commodi ad quasi similique eos veniam fuga et quisquam nulla ea ullam eaque. Vel modi quam sit omnis asperiores rem assumenda accusantium id quia aspernatur At velit quia. Qui illo dignissimos sit error quia ut rerum minima aut amet consectetur est corrupti possimus nam numquam tempore.Est temporibus architecto qui beatae libero non veniam voluptas quo sunt maiores aut error veniam qui labore magnam aut possimus nisi. Eum mollitia recusandae et consequatur temporibus et aspernatur saepe est dicta consectetur et laborum maxime id consectetur quia"}</p>
      </div>
      <div className={styles.detailswrapper}>
        <h2 className={styles.headingiui}>{"What is TESA?"}</h2>
        <p className={styles.piuiwrap}>{"Lorem ipsum dolor sit amet. Est praesentium commodi ut culpa perspiciatis non internos quia? Non totam error sit molestiae temporibus id asperiores dolor qui atque illo vel omnis aliquam. Et illo nobis et quaerat aliquid in fugit quibusdam a molestiae veritatis. In voluptas saepe eum voluptatem consectetur aut eligendi sint qui dolor obcaecati 33 consequatur accusantium eos autem aliquam.Quo dolorum quae eum rerum commodi ad quasi similique eos veniam fuga et quisquam nulla ea ullam eaque. Vel modi quam sit omnis asperiores rem assumenda accusantium id quia aspernatur At velit quia. Qui illo dignissimos sit error quia ut rerum minima aut amet consectetur est corrupti possimus nam numquam tempore.Est temporibus architecto qui beatae libero non veniam voluptas quo sunt maiores aut error veniam qui labore magnam aut possimus nisi. Eum mollitia recusandae et consequatur temporibus et aspernatur saepe est dicta consectetur et laborum maxime id consectetur quia"}</p>
      </div>
      
    <Aboutus/>
    <Faq/>
    <Footer/>
    <Footermain/>
      
    </div>
  )
}

export default tesapesa