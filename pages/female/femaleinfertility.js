import React from 'react'
import styles from '../../styles/male.module.css'
import NavbarF from '@/components/Navbar'
import Footer from '@/components/Footer'
import Aboutus from '@/components/Aboutus'
import Footermain from '@/components/Footermain'
import Image from "next/image";


const femaleinfertility = () => {
    
  return (

    <div className={styles.bodymwrap}>
    <NavbarF/>
    {/* //......................what is infertility..............// */}
    <div className={styles.imgmfwrap}>
    <Image
  src="/Female Fertility Icon/female-illustrator.png"
  className={styles.imagewrap}
  alt="My image"
  width={900}
  height={300}
/>
     </div>
    <div>
        <h1 className={styles.headingwrap}>
            {"What is Female Infertility?"}
        </h1>
        <div className={styles.pmwrap}>
        <p >
       {"Female infertility is a condition that affects a woman's ability to conceive and carry a pregnancy to term. It can be caused by a variety of factors, including hormonal imbalances, structural issues, or ovulation problems. Diagnosis of female infertility typically involves a thorough medical history, physical examination, and various tests such as hormone tests, imaging studies, and fertility assessments. Treatment options may include medication, surgery, or assisted reproductive technologies such as IVF. Female infertility can be a complex and emotionally challenging issue, but with appropriate diagnosis and treatment, many women are able to overcome these challenges and achieve their dream of parenthood."}
        </p>
        </div>
    </div>
    {/* //..................Causes.........................// */}
        <h1 className={styles.headingwrap}>
        {"Causes of Female Infertility"}
    </h1>
    <hr className={styles.linewrap}/>
    <div className={styles.mwrapper}>
    <div className={styles.mwrap}>
    <h2 className={styles.hwrap}>
       {"Hormonal imbalances"}
    </h2>
        <p className={styles.pwrap}>
        {"Hormonal imbalances are a common cause of female infertility. These imbalances can prevent ovulation or interfere with the implantation of a fertilized egg. Polycystic ovary syndrome (PCOS) is a common hormonal disorder that can cause irregular periods, anovulation, and infertility. Other hormonal imbalances that can cause infertility include thyroid disorders, hyperprolactinemia, and premature ovarian failure. Treatment options for hormonal imbalances may include medication to regulate ovulation and hormone levels"}
        </p>
    </div>
    <div className={styles.imgmwrap}>
    <Image
  src="/Female Fertility Icon/female-Infertility-1.jpg"
  className={styles.imagewrap}
  alt="My image"
  width={400}
  height={300}
/>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmrrxamJcM3HnpDDUk-t1WxrAVENO4j30hAPSGyhMIg&usqp=CAU&ec=48665701" alt="..."/> */}
    </div>
    </div>
    <div className={styles.mwrapper}>
    <div className={styles.mwrap}>
    <h2 className={styles.hwrap}>
    {"Structural issues"}
    </h2>
        <p className={styles.pwrap}>
          {"Structural issues such as blocked fallopian tubes, uterine abnormalities, and endometriosis can also cause female infertility. Blocked fallopian tubes can prevent the fertilization of an egg or the implantation of a fertilized egg, while uterine abnormalities such as fibroids or polyps can interfere with implantation. Endometriosis is a condition where tissue similar to the lining of the uterus grows outside of the uterus, causing inflammation and scarring that can affect fertility. Treatment options for structural issues may include surgery to correct abnormalities or assisted reproductive technologies such as IVF."}
        </p>
    </div>
    <div className={styles.imgmwrap}>
    <Image
  src="/Female Fertility Icon/female-Infertility-1.jpg"
  className={styles.imagewrap}
  alt="My image"
  width={400}
  height={300}
/>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmrrxamJcM3HnpDDUk-t1WxrAVENO4j30hAPSGyhMIg&usqp=CAU&ec=48665701" alt="..."/> */}
    </div>
    </div>

    {/* //..................Treatments..................// */}

    <h1 className={styles.headingwrap}>
        {"Advanced Female Infertility Treatments"}
    </h1>
    <hr className={styles.linewrap}/>
    <h1 className={styles.headingmwrap}>
    
    {"OI/IT"}
    </h1>
    <div className={styles.bodywrap}>
    <Image
  src="/Female Fertility Icon/OI_IT.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
      {/* <img className={styles.imgwrap} src='/Female Fertility Icon/OI_IT.png' width="400" height="300" alt=''/> */}

<p className={styles.pwrap}>Ovulation Induction/Intrauterine Insemination, which is a type of fertility treatment often used to help couples who are struggling to conceive due to ovulation problems or unexplained infertility.The treatment involves the use of medications to stimulate the ovaries to produce one or more eggs, followed by the placement of sperm directly into the uterus through a catheter. This process is timed with the woman's ovulation cycle to increase the chances of fertilization.OI/IT is a relatively simple and affordable treatment option that can be highly effective for some couples. It is often recommended as a first-line treatment for mild to moderate infertility before moving on to more invasive procedures such as IVF.</p>
</div>
    <h1 className={styles.headingmwrap}>
    ICSI
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>{ "Intracytoplasmic Sperm Injection, which is a type of assisted reproductive technology (ART) used to treat male infertility. In this procedure, a single sperm is injected directly into an egg to achieve fertilization. ICSI is often recommended when the male partner has low sperm count, poor sperm motility, or abnormal sperm shape.ICSI is a highly successful and safe procedure, with success rates comparable to conventional IVF. It has revolutionized the treatment of male infertility, providing hope for couples who would not have been able to conceive otherwise. However, as with any fertility treatment, it is important to understand the risks and benefits before proceeding. A qualified healthcare professional can help you determine if ICSI is the right option for you"}</p>
<Image
  src="/Female Fertility Icon/ICSI.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
{/* <img className={styles.imgwrap} src='/Female Fertility Icon/ICSI.png' width="400" height="300" alt=''/> */}

</div>
    <h1 className={styles.headingmwrap}>
    
    {"IUI"}
    </h1>
<div className={styles.bodywrap}>
<Image
  src="/Female Fertility Icon/IUI.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>

{/* <img className={styles.imgwrap} src='/Female Fertility Icon/IUI.png' width="400" height="300" alt=''/> */}
<p className={styles.pwrap}>{"IUI, or intrauterine insemination, is a type of fertility treatment that involves the placement of sperm directly into the uterus through a catheter. It is often used to treat couples who are struggling to conceive due to issues with sperm count, motility, or cervical mucus.The procedure is relatively simple and painless, and can be done in a clinic or doctor's office. It is typically timed with the woman's ovulation cycle to increase the chances of fertilization.IUI is a less invasive and less expensive option compared to other fertility treatments such as IVF. However, success rates can vary depending on individual factors such as age, cause of infertility, and overall health. It is important to consult with a healthcare professional to determine if IUI is the best option for your unique situation."}</p>

</div>
    <h1 className={styles.headingmwrap}>
    {"IVF"}
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>
{"IVF, or in vitro fertilization, is a fertility treatment that involves the retrieval of a woman's eggs, fertilization with sperm in a laboratory setting, and transfer of the resulting embryos into the uterus. It is a highly effective option for couples struggling with infertility due to various factors such as advanced maternal age, blocked fallopian tubes, or low sperm count.IVF is a complex and expensive procedure, but can offer hope to couples who have been unable to conceive through other methods. Success rates can vary based on age, health status, and other factors. It is important to consult with a qualified healthcare professional to determine if IVF is the best option for your individual situation"}</p>
<Image
  src="/Female Fertility Icon/IVF.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
{/* <img className={styles.imgwrap} src='/Female Fertility Icon/IVF.png' width="400" height="300" alt=''/> */}

</div>
    <h1 className={styles.headingmwrap}>
    
    {"Embryo Donation"}
    </h1>
<div className={styles.bodywrap}>
<Image
  src="/Female Fertility Icon/Embryo Donation.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>

{/* <img className={styles.imgwrap} src='/Female Fertility Icon/Embryo Donation.png' width="400" height="300" alt=''/> */}
<p className={styles.pwrap}>{"Embryo donation is a form of fertility treatment in which frozen embryos from one couple are donated to another couple for use in their IVF treatment. These embryos are usually created during the IVF process when a couple has excess viable embryos that they do not need for their own treatment.Embryo donation can provide an opportunity for couples who are unable to conceive on their own to start or grow their family. The donated embryos are transferred to the uterus of the recipient woman, who carries the pregnancy to term and gives birth to the child.Embryo donation is a highly regulated process, and both the donor and recipient couples typically undergo thorough medical and psychological screening before the procedure can take place"}</p>

</div>
    <hr className={styles.linewrap}/>
    <h1 className={styles.headingmwrap}>
    
    {"Laparoscopy"}
    </h1>
    <div className={styles.bodywrap}>
    <Image
  src="/Female Fertility Icon/Laparoscopy .png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
      {/* <img className={styles.imgwrap} src='/Female Fertility Icon/Laparoscopy .png' width="400" height="300" alt=''/> */}

<p className={styles.pwrap}>{"Laparoscopy is a minimally invasive surgical procedure that allows doctors to examine and treat medical conditions in the abdomen and pelvis. During the procedure, a thin, lighted tube with a camera attached to it is inserted through a small incision in the abdomen, allowing the doctor to view the internal organs on a monitor.Laparoscopy can be used to diagnose and treat a variety of conditions, including endometriosis, infertility, pelvic pain, and ovarian cysts. The procedure typically has a shorter recovery time and fewer complications than traditional open surgery, making it a preferred option for many patients.Laparoscopy is often performed under general anesthesia and may require only a few small incisions, resulting in less pain and scarring than traditional surgery."}</p>
</div>
    <h1 className={styles.headingmwrap}>
    {"Hysteroscopy"}
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>Hysteroscopy is a minimally invasive diagnostic and surgical procedure that allows doctors to examine the inside of the uterus using a thin, lighted tube with a camera attached to it. The procedure is typically performed under general anesthesia and involves inserting the hysteroscope through the cervix and into the uterus.Hysteroscopy can be used to diagnose and treat a variety of conditions, including abnormal bleeding, uterine fibroids, polyps, and adhesions. The procedure allows doctors to visualize the inside of the uterus and take biopsies or remove abnormal tissue without the need for traditional open surgery.Hysteroscopy is generally considered safe and has a low risk of complications. The recovery time is typically short, with most women able to return to their normal activities within a day or two.</p>
<Image
  src="/Female Fertility Icon/Hysteroscopy.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
{/* <img className={styles.imgwrap} src='/Female Fertility Icon/Hysteroscopy.png' width="400" height="300" alt=''/> */}

</div>
    <h1 className={styles.headingmwrap}>
    
    {"Surrogacy"}
    </h1>
<div className={styles.bodywrap}>
<Image
  src="/Female Fertility Icon/Surrogacy.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>

{/* <img className={styles.imgwrap} src='/Female Fertility Icon/Surrogacy.png' width="400" height="300" alt=''/> */}
<p className={styles.pwrap}>{"Surrogacy is a process in which a woman, known as the surrogate mother, carries a pregnancy and gives birth to a child for another person or couple, known as the intended parents. There are two types of surrogacy: traditional and gestational. In traditional surrogacy, the surrogate mother is inseminated with the intended father's sperm, while in gestational surrogacy, the embryo is created using the intended parents' or donors' sperm and eggs and transferred to the surrogate mother's uterus.Surrogacy can be an option for couples who are unable to conceive naturally or carry a pregnancy to term due to medical reasons."}</p>

</div>
    <h1 className={styles.headingmwrap}>
    {"Egg donation"}
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>
{"Egg donation is a process in which a woman, known as the donor, provides her eggs to another person or couple, known as the recipient(s), for use in assisted reproduction. This can be an option for women who are unable to produce viable eggs due to medical reasons or advanced age. Egg donation involves the use of fertility drugs to stimulate the ovaries to produce multiple eggs, which are then retrieved through a minor surgical procedure. The eggs are fertilized with sperm in a laboratory and transferred to the recipient's uterus or used for embryo creation. Egg donation can offer a chance at parenthood for those who would otherwise be unable to conceive."}</p>
<Image
  src="/Female Fertility Icon/Egg Donation.png"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
{/* <img className={styles.imgwrap} src='/Female Fertility Icon/Egg Donation.png' width="400" height="300" alt=''/> */}

</div>

<Footer/>
<Aboutus/>
<Footermain/>
    </div>
    
  )
}

export default femaleinfertility