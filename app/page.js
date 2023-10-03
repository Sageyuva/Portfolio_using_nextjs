"use client"
import { Linkedin , Github ,Code2 ,Instagram } from 'lucide-react';
import Link from "next/link"
import hs from "./styles/HomeS.module.css"
import AboutP from './components/AboutP';
import Skills from './components/Skills';



export default function Home() {
  
   
  return (
  <>
  <div className={hs.waste}></div>
<div className={hs.Homemain}>
  <div className={hs.main1}>
    <p className={hs.hi}>Hi There,</p>
    <p className={hs.im}>I'm <span className={hs.yuva}>Yuvaraj</span></p>
    <p className={hs.me}>MERN stack Developer</p>
    <div className={hs.social}>
    <Link target='_blank' href="https://www.linkedin.com/in/yuvaraj-dhammure-7bba2a238" className={hs.soli}><Linkedin/></Link>
    <Link target='_blank' href="https://github.com/Sageyuva" className={hs.soli}><Github/></Link>
    <Link target='_blank' href="https://dev.to/sageyuva" className={hs.soli}><Code2/></Link>
    <Link target='_blank' href="https://www.instagram.com/yuvaraj.d._" className={hs.soli}><Instagram/></Link>
    </div>
  </div>
  <div className={hs.main2}>
    <img className={hs.homimg} src="https://img.freepik.com/premium-vector/man-with-laptop-working-student-remote-work-concept_113065-857.jpg?size=626&ext=jpg" alt="" />
  </div>
</div>
<AboutP/>
 <Skills/>


  </> 
  )
}