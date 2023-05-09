import React from 'react'
import styles from '../../../styles/treatments.module.css'
import NavbarF from '@/components/Navbar'
import Footer from '@/components/Footer'
import Aboutus from '@/components/Aboutus'
import Footermain from '@/components/Footermain'
import Faq from '@/components/Faqs'
import Image from "next/image";
import Card from 'react-bootstrap/Card';

const iui = () => {
    return (
        <div className={styles.body}>
        <NavbarF/>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h1 className={styles.headingiui}>
                        Experience the hope of starting a family with IUI treatment in Bangalore
                    </h1>
                    <p className={styles.piuiwrap}>
                        {"Lorem ipsum dolor sit amet. Sit possimus earum et sapiente incidunt a odit alias sed neque saepe est nostrum quasi est accusamus rerum aut veniam dignissimos. Quo quibusdam aspernatu et voluptam magni."}
                    </p>
                </div>
                <div className={styles.image}>
                    <Image
                        src="/IUI Banner Web.jpeg"
                        className={styles.iuiimgwrap}
                        alt="My image"
                        width={600}
                        height={350}
                    />
                </div>
            </div>
            <h1 className={styles.headingwrap}>
        {"What is IUI Treatment?"}
    </h1>
    <hr className={styles.linewrap}/>
    <h4 className={styles.heading4}>{"Introduction to IUI"}</h4>
    <p className={styles.para}>{"Lorem ipsum dolor sit amet. Sit possimus earum et sapiente incidunt a odit alias sed neque saepe est nostrum quasi est accusamus rerum aut veniam dignissimos. Quo quibusdam aspernatu et voluptam magni."}</p>

    <div className={styles.bodywrap}>
    <Image
  src="/IUI Process.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={400}
/>
<p className={styles.pwrap}>{"In vitro fertilization (IVF) is a type of assisted reproductive technology (ART) used to help couples who are struggling with infertility. The process involves the fertilization of eggs outside the woman's body in a laboratory dish, and the resulting embryo(s) are then transferred to the woman's uterus to implant and develop into a pregnancy.IVF typically involves several steps, including ovarian stimulation to produce multiple mature eggs, egg retrieval, fertilization of the eggs with sperm, culture of the resulting embryos in a laboratory, and embryo transfer into the uterus.IVF can be a complex and emotionally challenging process, but it has helped many couples achieve their dream of starting a family. It is important to speak with a qualified fertility specialist to determine if IVF is a viable option for you."}</p>
</div>
    <h3 className={styles.heading3}>{"How Does IUI Treatment Help in Achieving Pregnancy?"}</h3>
    <p className={styles.para}>{"Lorem ipsum dolor sit amet. Sit possimus earum et sapiente incidunt a odit alias sed neque saepe est nostrum quasi est accusamus rerum aut veniam dignissimos. Quo quibusdam aspernatu et voluptam magni."}</p>
<div className={styles.riskwrap}>
    <h1 className={styles.headingwrap}>{"Potential Risks of IUI"}</h1>
    <p className={styles.pwrap}>{"Lorem ipsum dolor sit amet. Vel libero eveniet non dolor recusandae eum explicab"}</p>
    
    <ul type="rounded" className={styles.listwrappers}>
        <li className={styles.list}>
        <span className={styles.spanwrap}> Multiple Pregnancy:</span>
        {"In IUI treatment, the risk of multiple pregnancies is higher due to the possibility of multiple eggs being released and fertilized. Multiple pregnancies can lead to complications such as preterm labor and low birth weight, and increase the risk of maternal and fetal health issues. Proper monitoring and counseling can help reduce this risk."}
        </li>
        <li className={styles.list}>
        <span className={styles.spanwrap}> Multiple Pregnancy:</span>
        {"IUI increase the chances of having twins or triples"}
        </li>
        <li className={styles.list}>
        <span className={styles.spanwrap}> Multiple Pregnancy:</span>
        {"IUI increase the chances of having twins or triples"}
        </li>
        <li className={styles.list}>
        <span className={styles.spanwrap}> Multiple Pregnancy:</span>
        {"IUI increase the chances of having twins or triples"}
        </li>
    </ul>
</div>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h1 className={styles.heading}>
                        Advantages
                    </h1>
                    <hr className={styles.hr}/>
                    <p className={styles.paragwrap}>
                        {"Lorem ipsum dolor sit amet. Vel libero eveniet non dolor recusandae eum explicabo deleniti. Et ducimus consequatur sed corrupti distinctio sed optio dignissimos. A recusandae mollitia At officiis magni ea amet quis non quod ipsum est natus dolorem? Sed corporis doloribus eum nisi voluptatem vel incidunt rerum et dolores doloribus sit voluptas rerum sit dolorem consectetur.Est necessitatibus consequatur et nobis mollitia est sint iste. Et blanditiis perspiciatis non eaque aliquam aut natus dolor. Qui magni soluta ab nulla consequatur eos quod iure non dolorem corrupti qui minus dolores ab molestiae natus. Et quos ratione et incidunt omnis est incidunt labore et quod temporibus sed molestiae maiores ad error rerum.Est accusantium minus ad voluptas quaerat hic esse minus eum eaque tenetur rem exercitationem quae non porro incidunt. Ea animi officiis 33 iure voluptatum ea aliquid facere"}
                    </p>
                </div>
                
                <div className={styles.gridding}>
                <div className={styles.text}>
                    <h1 className={styles.heading}>
                        Disadvantages
                    </h1>
                    <hr  className={styles.hr}/>
                    <p className={styles.paragwrap}>
                        {"Lorem ipsum dolor sit amet. Vel libero eveniet non dolor recusandae eum explicabo deleniti. Et ducimus consequatur sed corrupti distinctio sed optio dignissimos. A recusandae mollitia At officiis magni ea amet quis non quod ipsum est natus dolorem? Sed corporis doloribus eum nisi voluptatem vel incidunt rerum et dolores doloribus sit voluptas rerum sit dolorem consectetur.Est necessitatibus consequatur et nobis mollitia est sint iste. Et blanditiis perspiciatis non eaque aliquam aut natus dolor. Qui magni soluta ab nulla consequatur eos quod iure non dolorem corrupti qui minus dolores ab molestiae natus. Et quos ratione et incidunt omnis est incidunt labore et quod temporibus sed molestiae maiores ad error rerum.Est accusantium minus ad voluptas quaerat hic esse minus eum eaque tenetur rem exercitationem quae non porro incidunt. Ea animi officiis 33 iure voluptatum ea aliquid facere"}
                    </p>
                </div>
                </div>
            </div>
    <Aboutus/>
    <Faq/>
    <Footer/>
    <Footermain/>


        </div>
    )
}

export default iui
