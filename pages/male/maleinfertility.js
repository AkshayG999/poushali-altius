import React from 'react'
import styles from '../../styles/male.module.css'
import NavbarF from '@/components/Navbar'
import Aboutus from '@/components/Aboutus'
import Footermain from '@/components/Footermain'
import Footer from '@/components/Footer'

import Image from "next/image";

const maleinfertility = () => {

    return (

        <div className={styles.bodymwrap}>
            <NavbarF />
            {/* //......................what is infertility..............// */}
            <div className={styles.imgmfwrap}>
                <Image

                    src="/Male Fertility Icon/Altius Fertility Illustration 1.png"
                    className={styles.imagewrap}
                    alt="My image"
                    width={900}
                    height={400}
                />
            </div>
            <div>
                <h1 className={styles.headingwrap}>
                    {"What is Male Infertility?"}
                </h1>
                <div className={styles.pmwrap}>
                    <p >
                        {"Male infertility is a condition in which a man is unable to impregnate a fertile female partner despite regular, unprotected sexual intercourse. Infertility affects about 15% of couples, and male infertility accounts for about half of all infertility cases. The most common causes of male infertility are low sperm count, poor sperm motility, and abnormal sperm shape or size. Other factors that can contribute to male infertility include hormonal imbalances, genetic abnormalities, testicular trauma or infections, and lifestyle factors such as smoking, alcohol consumption, and drug use. Treatment options for male infertility include lifestyle changes, medication, surgery, or assisted reproductive techniques such as in vitro fertilization (IVF) or intracytoplasmic sperm injection (ICSI)."}
                    </p>
                </div>
            </div>
            {/* //..................Causes.........................// */}
            <h1 className={styles.headingwrap}>
                {"Causes of Male Infertility"}
            </h1>
            <hr className={styles.linewrap} />
            <div className={styles.mwrapper}>
                <div className={styles.mwrap}>
                    <h2 className={styles.hwrap}>
                        {"Low Sperm Count"}
                    </h2>
                    <p className={styles.pwrap}>
                       {" A low sperm count, also called oligozoospermia, is where a man has fewer than 15 million sperm per millilitre of semen. Having a low sperm count can make it more difficult to conceive naturally, although successful pregnancies can still occur."}
                    </p>
                </div>
                <div className={styles.imagemwrap}>
                    <Image
                        src="/Male Fertility Icon/Sperm Donation.png"
                        className={styles.imagemwrap}
                        alt="My image"
                        width={400}
                        height={300}
                    />
                    {/* <img src="/public/Male Fertility Icon/Sperm Donation.png" alt="..."/> */}
                </div>
            </div>
            <div className={styles.mwrapper}>
                <div className={styles.mwrap}>
                    <h2 className={styles.hwrap}>
                        {"Poor sperm Movement"}
                    </h2>
                    <p className={styles.pwrap}>
                       {" Poor sperm movement, also known as asthenozoospermia, is a common cause of male infertility. It is characterized by a low percentage of sperm that are able to move properly towards the female egg for fertilization. This can be caused by various factors, such as genetic abnormalities, infections, hormonal imbalances, and lifestyle choices. Poor sperm movement can be diagnosed through a semen analysis test. Treatment options may include lifestyle changes, medication, or assisted reproductive techniques such as intracytoplasmic sperm injection (ICSI) or in vitro fertilization (IVF). In some cases, addressing the underlying cause of poor sperm movement can lead to significant improvements in sperm motility and fertility outcomes."}
                    </p>
                </div>
                <div className={styles.imagemwrap}>
                    <Image
                        src="/Male Fertility Icon/Sperm Donation.png"
                        className={styles.imagemwrap}
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
                        {"Poor Sperm Quality"}
                    </h2>
                    <p className={styles.pwrap}>
                       {" Poor sperm quality is a common cause of male infertility, characterized by a low percentage of sperm that are of normal shape, size, and genetic structure. Poor sperm quality can be caused by various factors such as hormonal imbalances, genetic abnormalities, infections, and lifestyle choices. It can be diagnosed through a semen analysis test. Treatment options may include lifestyle changes, medication, or assisted reproductive techniques such as in vitro fertilization (IVF) or intracytoplasmic sperm injection (ICSI). Improving sperm quality may involve changes in diet, exercise, and reducing exposure to environmental toxins. In some cases, addressing the underlying cause of poor sperm quality can lead to significant improvements in sperm count and fertility outcomes"}
                    </p>
                </div>
                <div className={styles.imagemwrap}>
                    <Image
                        src="/Male Fertility Icon/Sperm Donation.png"
                        className={styles.imagemwrap}
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
                        {"Sperm Structural issue"}
                    </h2>
                    <p className={styles.pwrap}>
                       {" Sperm structural issues are a common cause of male infertility, characterized by abnormal sperm shape and size. These structural issues can be caused by various factors such as genetic abnormalities, hormonal imbalances, infections, and lifestyle choices. They can be diagnosed through a semen analysis test. Treatment options may include lifestyle changes, medication, or assisted reproductive techniques such as in vitro fertilization (IVF) or intracytoplasmic sperm injection (ICSI). Improving sperm structure may involve changes in diet, exercise, and reducing exposure to environmental toxins. In some cases, addressing the underlying cause of sperm structural issues can lead to significant improvements in sperm morphology and fertility outcomes."}
                    </p>
                </div>
                <div className={styles.imagemwrap}>
                    <Image
                        src="/Male Fertility Icon/Sperm Donation.png"
                        className={styles.imagemwrap}
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
                        {"Varicocele"}
                    </h2>
                    <p className={styles.pwrap}>
                       {"Varicocele is a common condition that affects the veins in the scrotum. It is characterized by the enlargement of the veins, which can lead to decreased sperm quality and infertility in some men. Varicoceles are usually harmless and do not cause symptoms, but in some cases, they can cause pain or discomfort. Diagnosis of varicocele is typically done through a physical examination or ultrasound. Treatment options may include surgery, embolization, or observation. Varicoceles may be a contributing factor to male infertility, and addressing the condition can lead to improved sperm quality and fertility outcomes."}
                    </p>
                </div>
                <div className={styles.imagemwrap}>
                    <Image
                        src="/Male Fertility Icon/Varicocele.png"
                        className={styles.imagemwrap}
                        alt="My image"
                        width={400}
                        height={300}
                    />
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmrrxamJcM3HnpDDUk-t1WxrAVENO4j30hAPSGyhMIg&usqp=CAU&ec=48665701" alt="..."/> */}
                </div>
            </div>

            {/* //..................Treatments..................// */}

            <h1 className={styles.headingwrap}>
                {"Advanced Male Infertility Treatments"}
            </h1>
            <hr className={styles.linewrap} />
            <h1 className={styles.headingmwrap}>
               {" computer-assisted semen analysis"} <br />
                [CASA]
            </h1>
            <div className={styles.bodywrap}>
                <Image
                    src="/Male Fertility Icon/TESA_PESA.png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Male Fertility Icon/TESA_PESA.png' width="400" height="300" alt=''/> */}

                <p className={styles.pwrap}>{"Computer-assisted semen analysis (CASA) is a technique used to evaluate various parameters of sperm quality, such as sperm count, motility, and morphology. CASA uses specialized software to analyze video recordings of sperm samples, providing a more accurate and objective assessment of sperm quality compared to traditional manual methods. CASA can provide valuable information to help diagnose male infertility and guide treatment options. It is a useful tool for both research and clinical settings. However, it is important to note that CASA is not a replacement for a comprehensive semen analysis by a qualified healthcare professional, and should only be used as an adjunct to traditional methods"}</p>
            </div>
            <h1 className={styles.headingmwrap}>
                {"Testicular Sperm Aspiration"} <br />
                [TESA]
            </h1>
            <div className={styles.bodywrap}>
                <p className={styles.pwrap}>{"An assisted reproductive treatment, in TESA testicular tissue is extracted using a needle connected to a syringe and injected through the skin of the man's scrotum. PESA entails inserting a needle into the man's epididymis, the tube that links the testicles, to retrieve sperm."}</p>
                <Image
                    src="/Male Fertility Icon/TESA_PESA.png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Male Fertility Icon/TESA_PESA.png' width="400" height="300" alt=''/> */}

            </div>
            <h1 className={styles.headingmwrap}>
                {"Percutaneous Epididymal Sperm Aspiration"} <br />
                [PESA]
            </h1>
            <div className={styles.bodywrap}>
                <Image
                    src="/Male Fertility Icon/TESA_PESA.png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Male Fertility Icon/TESA_PESA.png' width="400" height="300" alt=''/> */}
                <p className={styles.pwrap}>{"An assisted reproductive treatment, in TESA testicular tissue is extracted using a needle connected to a syringe and injected through the skin of the man's scrotum. PESA entails inserting a needle into the man's epididymis, the tube that links the testicles, to retrieve sperm."}</p>

            </div>
            <h1 className={styles.headingmwrap}>
               {" Semen Freezing"}
            </h1>
            <div className={styles.bodywrap}>
                <p className={styles.pwrap}>{"The fertilityworld suggests that any male between 18 to 35 years may freeze their sperm "}(preserve) as the sperm tends to be healthiest at this stage of life because you never know what kind of environmental exposures you’ll come across or what health conditions could occur. Some of the medical conditions and lifestyles that made you preserve your sperm:</p>
                <Image
                    src="/Male Fertility Icon/Semen Freezing.png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Male Fertility Icon/Semen Freezing.png' width="400" height="300" alt=''/> */}
            </div>
            <h1 className={styles.headingmwrap}>
                {"Sperm Donation"}
            </h1>
            <div className={styles.bodywrap}>
                <Image
                    src="/Male Fertility Icon/Sperm Donation.png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Male Fertility Icon/Sperm Donation.png' width="400" height="300" alt=''/> */}
                <p className={styles.pwrap}>{"Sperm donation is the process of providing sperm to be used for assisted reproductive techniques such as in vitro fertilization (IVF) or intrauterine insemination (IUI). Sperm donors may choose to donate for a variety of reasons, including helping couples who struggle with infertility or single individuals who wish to become parents. Donors typically undergo a thorough screening process to ensure they meet the necessary health and genetic requirements. Donors may choose to remain anonymous or be known to the recipient. Sperm donation can provide a viable option for those who cannot conceive naturally, and has helped many individuals and couples achieve their dream of parenthood"}</p>

            </div>
            <h1 className={styles.headingmwrap}>
                {"Andrology"}
            </h1>
            <div className={styles.bodywrap}>
                <p className={styles.pwrap}>{"Andrology is a branch of medicine that focuses on the study and treatment of male reproductive health. It encompasses a wide range of conditions, including male infertility, erectile dysfunction, and hormonal imbalances. Andrology professionals may include urologists, endocrinologists, and reproductive specialists. Diagnosis of male reproductive issues may involve physical exams, blood tests, and semen analysis. Treatment options may include medication, lifestyle changes, or assisted reproductive techniques."}</p>
                <Image
                    src="/Male Fertility Icon/Affordable Treatments .png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Male Fertility Icon/Affordable Treatments .png' width="400" height="300" alt=''/> */}
            </div>
            <h1 className={styles.headingmwrap}>
                {"Affordable Treatments"}
            </h1>
            <div className={styles.bodywrap}>
                <Image
                    src="/Male Fertility Icon/Andrology Services .png"
                    className={styles.imgwrap}
                    alt="My image"
                    width={400}
                    height={300}
                />
                {/* <img className={styles.imgwrap} src='/Male Fertility Icon/Andrology Services .png' width="400" height="300" alt=''/> */}
                <p className={styles.pwrap}>{" There are a variety of options available to help make fertility treatments more affordable.It is important to do research and discuss options with a healthcare professional to find the most affordable and effective treatment options that fit individual needs and budget.We Altius Fertility Provide affordable Treatment."}</p>

            </div>


            
            <Footer />
            <Aboutus/>
            <Footermain/>
        </div>

    )
}

export default maleinfertility