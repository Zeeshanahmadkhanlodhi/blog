import React from 'react'
import styles from "./navbar.module.css";
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';


const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            Zeeshan
        </div>
        <div className={styles.links}>
            <Link href="/" >Home</Link>
            <Link href="/" >About</Link>
            <Link href="/" >Contact</Link>
            <AuthLinks />
            <ThemeToggle />

        </div>
        
    </div>
  )
}

export default Navbar;
