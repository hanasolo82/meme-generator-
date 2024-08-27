import React,{useState} from "react";
import styles from './Meme.module.css';
import memesData from '../../memeData';


export default function Meme() {
    
 


    const [meme, setMeme] = useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemes, setAllMemesData] = useState(memesData);

    function getRandomMemes(event) {
       event.preventDefault()
       const memesList = allMemes.data.memes;
       const randomIndex = Math.floor(Math.random() * memesList.length);
       const url = memesList[randomIndex].url
       setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        
       }));    
    }
    
    

    return (
        <main className={styles.mainContainer}>
            <form className={styles.formContainer}>
                <label className={styles.labelLeft} htmlFor='left'>Top Text</label>
                <input 
                    placeholder='left'
                    className={styles.inputLeft} 
                    name="left" 
                    id='left' 
                    type='text'
                />
                <label htmlFor='right' className={styles.inputRight}>Bottom  Text</label>
                <input 
                    placeholder='right'
                    className={styles.labelRight} 
                    name='right' 
                    id='right' 
                    type='text'
                />
                <button onClick={getRandomMemes} className={styles.button}>
                         🚀 Get a new meme image 🖼️
                </button>
            </form>
            
                <img 
                    className={styles.imageMeme}
                    src= {meme.randomImage} 
                />
                
        </main>
    )

};
