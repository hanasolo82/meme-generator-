import React from "react";
import styles from './Main.module.css';



export default function Main() {

    return (
        <main className={styles.mainContainer}>
            <form className={styles.formContainer}>
                <label className={styles.labelLeft} for='left'>Top Text</label>
                <input placeholder='left'className={styles.inputLeft} name="left" id='left' type='text'/>
                <label for='right' className={styles.inputRight}>Bottom  Text</label>
                <input placeholder='right'className={styles.labelRight} name='right' id='right' type='text'/>
                <button className={styles.button}>
                         🚀 Get a new meme image 🖼️
                </button>
            </form>
        </main>
    )

};
