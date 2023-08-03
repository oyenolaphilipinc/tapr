/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import iphone from "../../assets/iphone.svg"
import ellipse from "../../assets/ellipse.png"
import text from "../../assets/text.svg"
import app from "../../assets/app.svg"
import play from "../../assets/play.svg"
import banner from "../../assets/banner.svg"

const Header = () => {
  return (
    <div>
      <div className="mb-12 lg:mb-30">
        <h1 className="text text-center text-2xl md:text-3xl lg:text-4xl xl:text-[3rem]">Accept contactless payment<br/> on NFC-enabled <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-indigo-500">devices</span></h1>
      </div>
      <div className="">
        <img src={ellipse} className="w-[250px] mx-auto md:w-[480px]"/>
        <img src={iphone} className="w-[100px] mx-auto md:w-[200px] -translate-y-[110%] md:-translate-y-[108%]" alt={"Iphone image"} />
        <img src={text} className="mx-auto w-[300px] -translate-y-[720%] md:w-[350px] md:-translate-y-[1200%]"/>
        <img src={play} className="w-[100px] mx-auto -translate-y-[1175%] -translate-x-[50%] md:w-[180px] md:-translate-y-[1250%]" alt={"play icon"} />
        <img src={app} className="w-[100px] mx-auto -translate-y-[1180%] -translate-x-[50%] md:w-[180px] md:-translate-y-[1260%]" alt={"app icon"} />
        <img src={banner} className="w-[100px] mx-auto -translate-y-[770%] translate-x-[65%] md:w-[200px] md:-translate-y-[880px]" alt={"banner icon"} />
      </div>
    </div>
  )
}

export default Header;