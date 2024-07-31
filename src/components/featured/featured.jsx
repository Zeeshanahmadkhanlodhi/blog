import React from 'react'
import style from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}><b className={style.bold}>Hey , Lama Dev Here </b> Discover my stories and creative ideas</h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill className={style.image} />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, placeat?</h1>
          <p className={style.postDec}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis nostrum ut ad, animi non hic quasi et adipisci pariatur rerum dolore magnam illum, delectus necessitatibus, itaque accusamus nemo laboriosam.

          </p>
          <button className={style.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
