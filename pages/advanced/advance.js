import React from 'react'
import styles from '../../styles/male.module.css'
import NavbarF from '@/components/Navbar'
import Footer from '@/components/Footer'
import Footermain from '@/components/Footermain'
import Aboutus from '@/components/Aboutus'
import Image from "next/image";

const advance = () => {
    
  return (

    <div className={styles.bodymwrap}>
    <NavbarF/>
    {/* //......................what is infertility..............// */}
    <div className={styles.imgmfwrap}>
     </div>

    {/* //..................Treatments..................// */}

    <h1 className={styles.headingwrap}>
        {"Advanced Infertility Treatments"}
    </h1>
    <hr className={styles.linewrap}/>
    <h1 className={styles.headingmwrap}>
    
    {"Freezing or Preservation"}
    </h1>
    <div className={styles.bodywrap}>
    <Image
  src="/Advance Features/Freezing or Preservation.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>

      {/* <img className={styles.imgwrap} src='/Advance Features/Freezing or Preservation.png' width="400" height="300" alt=''/> */}

<p className={styles.pwrap}>{"Freezing or preservation of reproductive material is a common technique used in infertility treatments. It allows individuals to preserve their eggs, sperm, or embryos for future use, especially for those who are undergoing medical treatments that may affect their fertility or for those who want to delay parenthood. The process involves the collection and freezing of reproductive material, which can be stored for years without losing its quality. When the individual or couple is ready to conceive, the frozen material can be thawed and used in assisted reproduction techniques such as IVF. Freezing or preservation of reproductive material offers a valuable option for individuals or couples who want to ensure their future chances of conception."}</p>
</div>
    <h1 className={styles.headingmwrap}>
    {"MACS"}
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>{"Magnetic-activated cell sorting (MACS) is a specialized laboratory technique used in infertility treatments to improve the quality of sperm. MACS is a type of sperm selection method that allows for the isolation and separation of high-quality sperm from those with abnormalities. The process involves attaching magnetic beads to the sperm cells and passing them through a magnetic field. The high-quality sperm cells with normal DNA undergo magnetic attraction and are collected, while the abnormal sperm cells remain behind. This technique helps increase the chances of fertilization and embryo development, especially in cases where male partners have sperm DNA fragmentation or poor sperm quality. MACS can be used in combination with other assisted reproductive techniques, such as ICSI, to improve treatment outcomes"}</p>
<Image
  src="/Advance Features/MACS.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
{/* <img className={styles.imgwrap} src='/Advance Features/MACS.png' width="400" height="300" alt=''/> */}

</div>
    <h1 className={styles.headingmwrap}>
    
    {"PICSI"}
    </h1>
<div className={styles.bodywrap}>

<Image
  src="/Advance Features/PICSI.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
{/* <img className={styles.imgwrap} src='/Advance Features/PICSI.png' width="400" height="300" alt=''/> */}
<p className={styles.pwrap}>{"PICSI (Physiological Intracytoplasmic Sperm Injection) is an advanced laboratory technique used in infertility treatments to improve the selection of the healthiest and most viable sperm for fertilization. This technique involves the use of a special dish that contains a hyaluronan gel that mimics the environment of the female reproductive tract. The sperm sample is placed in the dish, and the healthiest sperm attach to the hyaluronan, indicating that they have the necessary structural and functional characteristics for successful fertilization.PICSI is particularly useful for couples who have had unsuccessful IVF treatments or have male factor infertility issues. This technique can increase the chances of successful fertilization and improve the overall success rates of IVF treatments."}</p>

</div>
    <h1 className={styles.headingmwrap}>
    {"Sequential transfer"}
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>
{"Sequential transfer is a technique used in infertility treatments, particularly in in-vitro fertilization (IVF), where the embryos are transferred into the uterus in a specific order. It involves transferring a selected number of embryos into the uterus, followed by a second transfer of any remaining embryos after a few days. This technique aims to improve the chances of pregnancy by allowing embryologists to carefully choose the best embryos for the first transfer, and then evaluate the remaining embryos for further transfer in a subsequent cycle. Sequential transfer is often used when a woman has had multiple unsuccessful IVF cycles, or when there is a risk of multiple pregnancies if all embryos are transferred at once."}</p>
<Image
  src="/Advance Features/Sequential Transfer.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
{/* <img className={styles.imgwrap} src='/Advance Features/Sequential Transfer.png' width="400" height="300" alt=''/> */}

</div>
    <h1 className={styles.headingmwrap}>
    
    {"Endometrial Rejuvenation"}
    </h1>
<div className={styles.bodywrap}>
<Image
  src="/Advance Features/Endometrial Rejuvenation.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>

{/* <img className={styles.imgwrap} src='/Advance Features/Endometrial Rejuvenation.png' width="400" height="300" alt=''/> */}
<p className={styles.pwrap}>
{"Endometrial rejuvenation is a technique used in infertility treatments to improve the chances of successful embryo implantation. It involves the use of growth factors or stem cells to regenerate the lining of the uterus, which plays a crucial role in supporting embryo development. This technique is particularly useful for women who have experienced recurrent implantation failure, thin endometrial lining, or who have undergone multiple unsuccessful IVF cycles. Endometrial rejuvenation can be done through various methods such as stem cell therapy, PRP (platelet-rich plasma) therapy, or through the use of growth factors. Endometrial rejuvenation has shown promising results in improving endometrial receptivity, and thus increasing the chances of a successful pregnancy."}</p>

</div>

<Footer/>
<Aboutus/>
<Footermain/>
    </div>
    
  )
}

export default advance