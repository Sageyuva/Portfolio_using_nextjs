"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Linkedin , Github ,Code2 ,Instagram } from 'lucide-react';
import cscs from "../styles/ContactS.module.css"
import hs from "../styles/HomeS.module.css"
import Link from 'next/link'

const page = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fo8v9fq', 'template_xxv50xu', form.current, 'pbdNnJpDOAdAzrSTZ')
        .then((result) => {
            console.log(result.text);
            alert("Message Sent ")
            window.location.reload();

        }, (error) => {
            console.log(error.text);
            alert("Message erroe")
            window.location.reload();
        });
    };
  return (
    <>
    <div className={hs.waste}></div>
    <div className={cscs.maindi}>
 <div className={cscs.maindi1}>  
         <form ref={form} onSubmit={sendEmail} className={cscs.forms}>
            <label className={cscs.labal1} htmlFor='name'>Name</label>
            <input className={cscs.inputb} id='name' placeholder='Name'  name="user_name" type="text" />
        
            <label className={cscs.labal1}  htmlFor='mail'>E-mail</label>
            <input className={cscs.inputb} id='mail' placeholder='E-mail'  name="user_email" type="text" />
        
            <label className={cscs.labal1}  htmlFor='Contact'>Contact Number</label>
            <input className={cscs.inputb} id='Contact' placeholder='Number'  name="user_number" type="text" />
       
            <label  className={cscs.labal1}  htmlFor='message'>Message</label>
            <textarea className={cscs.inputb} name="hi_message" id="message"  cols="30" rows="10"></textarea>
            <button   type="submit" value="Send" className={cscs.btn}>Send</button>
        </form></div>
   <div className={cscs.maindi2}>
    <img className={cscs.mainimg} src="https://img.freepik.com/premium-vector/customer-support-african-man-with-headphones-working-with-laptop-vector-illustrationxa_163786-1046.jpg?size=626&ext=jpg" alt=""/>
    <div className={hs.social}>
    <Link target='_blank' href="https://www.linkedin.com/in/yuvaraj-dhammure-7bba2a238" className={hs.soli}><Linkedin/></Link>
    <Link target='_blank' href="https://github.com/Sageyuva" className={hs.soli}><Github/></Link>
    <Link target='_blank' href="https://dev.to/sageyuva" className={hs.soli}><Code2/></Link>
    <Link target='_blank' href="https://www.instagram.com/yuvaraj.d._" className={hs.soli}><Instagram/></Link>
    </div>
   </div>
    </div>
    </>
  )
}

export default page