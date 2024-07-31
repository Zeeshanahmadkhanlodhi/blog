import React from 'react'
import style from "./categoryList.module.css";
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Category</h1>
      <div className={style.categories}>
          <Link href="/blog?cat=style" className={`${style.category}  ${style.style}`} >
            <Image alt='' src="/style.png" width={32} height={32} className={style.image} />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${style.category}  ${style.style}`} >
            <Image alt='' src="/style.png" width={32} height={32} className={style.image} />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${style.category}  ${style.style}`} >
            <Image alt='' src="/style.png" width={32} height={32} className={style.image} />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${style.category}  ${style.style}`} >
            <Image alt='' src="/style.png" width={32} height={32} className={style.image} />
            style
          </Link>
          <Link href="/blog?cat=style" className={`${style.category}  ${style.style}`} >
            <Image alt='' src="/style.png" width={32} height={32} className={style.image} />
            style
          </Link>
      </div>
      
    </div>
  )
}

export default CategoryList
