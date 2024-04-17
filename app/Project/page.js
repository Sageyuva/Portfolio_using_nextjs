import React from 'react'
import hs from "../styles/HomeS.module.css"
import ps from "../styles/peoject.module.css"
import Card from "../components/card"
import imgy from "../images/news.png"
import news from "../images/newso.jpg"
import textu from "../images/textt.jpg"
import port from "../images/port.png"
import flu from "../images/download.png"
import calcu from "../images/calc.png"
import chat from "../images/chatting.png"
const page = () => {
  return (
    <>
    <div className={hs.waste}></div>
    <div className={ps.main}>
    <Card img={chat} name="Live chatting website" disc="Created full stack chatting website" link="https://github.com/Sageyuva/" />
    <Card img={port} name="Portfolio using Next.Js 13" disc="portfolio using next js 13 and inbuilt app router" link="https://github.com/Sageyuva/Portfolio_using_nextjs" />
        <Card img={imgy} name="Youtube clone using Rapid Api" disc="Youtube clone using Rapid api and React router dom with search bar " link="https://github.com/Sageyuva/youtube_clone_custom" />
        <Card img={news} name="News Api Website using React" disc="Created a news website using api and filters " link="https://github.com/Sageyuva/React-_js_News_api_project" />
        <Card img={news} name="News Api Website using HTML Css" disc="Created a news website using api and filters " link="https://github.com/Sageyuva/news-Api" />
        <Card img={textu} name="Text Utils using react and hooks" disc="Created a text utils application to understand hooks " link="https://github.com/Sageyuva/text-utils-web-using-reactjs" />
        <Card img={flu} name="TODO list mobile application" disc="Created a to do list mobile applicatio  using flutter " link="https://github.com/Sageyuva/Todolist_Flutter" />
        <Card img={calcu} name="Calculator website using React.Js" disc="Simple calculator web-site to understand functions in React.js " link="https://github.com/Sageyuva/react_calculator" />
        
    </div>
    </>
  )
}

export default page