import d from "../styles/About.module.css"
import React from 'react'
import Image from "next/image"
// import java from "../images/java.png"
// import css from "../images/css.png"
// import html from "../images/html.png"
// import js from "../images/js.png"
// import flu from "../images/download.png"
// import c from "../images/c.png"
// import mongo from "../images/mongo.png"
// import express from "../images/express.png"
// import next from "../images/nextjs.png"
import one from "../images/1st.jpeg"
import two from "../images/2nd.jpeg"
import three from "../images/3rd.jpeg"
import four from "../images/4th.jpeg"
import five from "../images/5th.jpeg"





import Link from "next/link"


const AboutP = () => {
  return (<>
  <div className={d.abb}>
    <h2 className={d.head}>About me</h2>
  </div>
    <div className={d.main}>
    <div className={d.main1}>
        <h2 className={d.carr}>Career Objective</h2>
        <p className={d.heads}>To excel as a MERN stack developer, I aim to leverage my skills in MongoDB, Express.js, React.js, and Node.js to build innovative and efficient web applications, contributing to a dynamic and collaborative development team.</p>
    </div>
    <div className={d.main2}>
        <img className={d.img} src="https://img.freepik.com/free-photo/fun-3d-illustration-cartoon-kid-with-vr-helmet_183364-81193.jpg?w=740&t=st=1690381146~exp=1690381746~hmac=4375b80ac81564d9af22dc406c4cea8e52eef709a5407e1bf80c25b7c53453a6" alt="" /></div>
    </div>
    <div className={d.abb}>
    <h2 className={d.head}>Certificates</h2>
    </div>
    <div className={d.skills}>
      <Link target="_blank" href="https://media.licdn.com/dms/image/D5622AQFIF27j65Tsrw/feedshare-shrink_2048_1536/0/1687066366289?e=1693440000&v=beta&t=6DnBnhKnSLJfS7TATVM1rSPmwumxcV9n6tpJ7_f1cvs">  <Image  className={d.linkdin} src={one} alt=" " height="90" width="200"/></Link>
      <Link target="_blank" href="https://media.licdn.com/dms/image/D5622AQE6K0TnuJaUWg/feedshare-shrink_800/0/1685418743991?e=1693440000&v=beta&t=UwpL-UtM0i5JspZ5QWaHCgrwx0jGvJ-SVWKLswYPpf8"> <Image  className={d.linkdin} src={two} alt=" " height="90" width="200"/></Link>
      <Link target="_blank" href="https://media.licdn.com/dms/image/D5622AQE-2M9xckxm_Q/feedshare-shrink_800/0/1685087572362?e=1693440000&v=beta&t=gtz9tJqrFG7GWybLhMmNzXBC1cm2XE2lvPQlH_cTPB8">  <Image  className={d.linkdin} src={three} alt=" " height="90" width="200"/></Link>
      <Link target="_blank" href="https://media.licdn.com/dms/image/C562DAQE4mHaev01yCQ/profile-treasury-image-shrink_1280_1280/0/1667905834437?e=1690992000&v=beta&t=ojSRXy3gT36Rp0rDyNntjeI1O7QE2-i3p6m70RRB3MA"><Image  className={d.linkdin} src={four} alt=" " height="90" width="200"/></Link>
      <Link target="_blank" href="https://media.licdn.com/dms/image/C562DAQGeNI0JTTYP2A/profile-treasury-image-shrink_8192_8192/0/1659064177945?e=1690992000&v=beta&t=u-nYCZ67zF0KvgJWdYqx2fO3T_iUxLOvN2AgO0ieBjE"> <Image  className={d.linkdin} src={five} alt=" " height="90" width="200"/></Link>
  
      
    </div>
    <div className={d.abb}>
    <h2 className={d.head}>Skills</h2>
    </div>
    {/* <div
    className={d.skills}>
        <Image  className={d.skim} src={c} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={java} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={js} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={html} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={css} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={mongo} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={flu} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={express} alt=" " height="90" width="200"/>
        <Image  className={d.skim} src={next} alt=" " height="90" width="200"/>
        
    </div> */}
   
    </>
  )
}

export default AboutP