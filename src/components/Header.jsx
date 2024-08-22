import React from 'react';
import styles from './Header.module.css';


export default function Header() {
    return (
        <header className={styles.container}>
            <img className={styles.meme}src='../images/Troll-Face.png'/>
            <p className={styles.title}>Meme Generator <span></span></p>
            <p className={styles.subTitle}>React Course - Project 3</p>
        </header>
    )

};