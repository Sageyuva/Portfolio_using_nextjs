
import React from 'react'
import cards from"../styles/cardstyle.module.css"
import Image from 'next/image'
import { Heading } from 'lucide-react'
import Link from 'next/link'

const card = (props) => {
  return (
    <div className={cards.CardMain}>
        <Image className={cards.img} src={props.img} width="90" height="400"/>
        <h1 className={cards.heading}>{props.name}</h1>
        <p className={cards.disc}>{props.disc}</p>
        <Link target='_blank' href={props.link}><div className={cards.btn}>Source Code</div></Link>
    </div>
  )
}

export default card