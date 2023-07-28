"use client"
import React, { useState } from 'react'
import ss from "../styles/NavStyle.module.css"
import {Menu,X, Home ,UserSquare ,GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

export const Nav = () => {
    const [state, setstate] = useState(true)
    const change = ()=> {
        setstate(!state)
    }
  return (
    <div className={ss.mainnav}>
     <div className={ss.main1}>
        <Link href="./"><h1>DevFolio</h1></Link>
     </div>
     <div className={ss.menu}>
        <div onClick={change}>{state?<Menu/>:<X/>}</div>
     </div>
     <div className={state? `${ss.main2}`: `${ss.main2clic}`}>
        <ul className={ss.main2list}>
            <Link href="./"><li className={ss.main2listitem}> <Home/> Home</li></Link>
            <Link href="/Project"><li className={ss.main2listitem}> <GanttChartSquare/> Project</li></Link>
            <Link href="/Contact"><li className={ss.main2listitem}><UserSquare/>Contact</li></Link>           
        </ul>
     </div>
    </div>
  )
}