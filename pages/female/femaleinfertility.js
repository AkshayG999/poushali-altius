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
  src="data:image/jpeg;base64,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"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
     </div>
    <div>
        <h1 className={styles.headingwrap}>
            {"What is Female Infertility?"}
        </h1>
        <div className={styles.pmwrap}>
        <p >
       {" Male infertility is defined as the inability of a male to make a fertile female pregnant, also for a minimum of at least one year of unprotected intercourse."}
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
       {" cause no. 1"}
    </h2>
        <p className={styles.pwrap}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
        </p>
    </div>
    <div className={styles.imgmwrap}>
    <Image
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmrrxamJcM3HnpDDUk-t1WxrAVENO4j30hAPSGyhMIg&usqp=CAU&ec=48665701"
  className={styles.imgwrap}
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
        cause no. 2
    </h2>
        <p className={styles.pwrap}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!
        </p>
    </div>
    <div className={styles.imgmwrap}>
    <Image
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmrrxamJcM3HnpDDUk-t1WxrAVENO4j30hAPSGyhMIg&usqp=CAU&ec=48665701"
  className={styles.imgwrap}
  alt="My image"
  width={400}
  height={300}
/>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgmrrxamJcM3HnpDDUk-t1WxrAVENO4j30hAPSGyhMIg&usqp=CAU&ec=48665701" alt="..."/> */}
    </div>
    </div>

    {/* //..................Treatments..................// */}

    <h1 className={styles.headingwrap}>
        Advanced Female Infertility Treatments
    </h1>
    <hr className={styles.linewrap}/>
    <h1 className={styles.headingmwrap}>
    
    OI/IT
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

<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
</div>
    <h1 className={styles.headingmwrap}>
    ICSI
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
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
    
    IUI
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
<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>

</div>
    <h1 className={styles.headingmwrap}>
    IVF
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
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
    
    Embryo Donation
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
<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>

</div>
    <hr className={styles.linewrap}/>
    <h1 className={styles.headingmwrap}>
    
    Laparoscopy
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

<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
</div>
    <h1 className={styles.headingmwrap}>
    Hysteroscopy
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
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
    
    Surrogacy
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
<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>

</div>
    <h1 className={styles.headingmwrap}>
    Egg donation
    </h1>
<div className={styles.bodywrap}>
<p className={styles.pwrap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
consequuntur! Commodi minima excepturi repudiandae velit hic maxime
doloremque. Quaerat provident commodi consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
quasi aliquam eligendi, placeat qui corporis!</p>
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