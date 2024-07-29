"use client";

import React, { useContext } from 'react'
import Style from "./themetoggle.module.css";
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {

  const {toggle , theme} = useContext(ThemeContext)

  console.log(theme);


  return (
    <div className={Style.container} onClick={toggle} style={theme == "dark" ? {background:"white"} : { background:"#0f172a"}}> 
      <Image src="/moon.png" width={14} height={14} alt='' />
      <div className={Style.ball} style={theme == "dark" ? {left:1, background:"#0f172a"} : {right:1 , background:"white"}}></div>
      <Image src="/sun.png" width={14} height={14} alt='' />

    </div>
  )
}

export default ThemeToggle;
