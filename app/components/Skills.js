import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {



  return (
   <center>
     <div className='w-[95%] rounded-2xl flex p-4 justify-center items-center gap-5 flex-wrap bg-white mt-6'>
    <SkillCard per="70%" img="https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.png"/>
    <SkillCard per="60%" img="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/c7f96/next-js-logo.webp"/>
    <SkillCard per="30%" img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png"/>
    <SkillCard per="30%" img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*XP-mZOrIqX7OsFInN2ngRQ.png"/>
    <SkillCard per="30%" img="https://logowik.com/content/uploads/images/mongodb9740.logowik.com.webp"/>
    <SkillCard per="70%" img="https://repository-images.githubusercontent.com/657736250/efe020c3-cfc2-41f9-be41-ad581ffc9969" />
    <SkillCard per="80%" img="https://www.nicepng.com/png/full/985-9857805_html5-css3-logo-png-html-and-css-logo.png" />
    <SkillCard per="70%" img="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo-768x480.png" />
    <SkillCard per="70%" img="https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png" />
    <SkillCard per="70%" img="https://www.etatvasoft.com/insights/wp-content/uploads/2017/02/b-thumb-img9.jpg" />
    </div>

   </center>
  )
}

export default Skills