import React,{useState, useId} from "react";
import styles from './Meme.module.css';
import memesData from '../../memeData';


export default function Meme() {
    
 


    const [meme, setMeme] = useState({
        topText:'',
        bottomText:'',
        randomImage:'http://i.imgflip.com/1bij.jpg'
    });
    const [allMemes, setAllMemesData] = useState(memesData);

    const id = useId;

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
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    

    return (
        <main className={styles.mainContainer}>
            <form className={styles.formContainer}>
                <label className={styles.labelLeft} htmlFor='left'>Top Text</label>
                <input 
                    placeholder='left'
                    className={styles.inputLeft} 
                    name="topText" 
                    id={id + 'left'} 
                    type='text'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <label htmlFor='right' className={styles.inputRight}>Bottom  Text</label>
                <input 
                    placeholder='right'
                    className={styles.labelRight} 
                    name='bottomText' 
                    id={id + 'right'} 
                    type='text'
                    value={meme.bottomText}
                    onChange={handleChange}

                />
                <button onClick={getRandomMemes} className={styles.button}>
                         🚀 Get a new meme image 🖼️
                </button>
            </form>
                <div className={styles.meme}>          
                <img className={styles.imageMeme} src= {meme.randomImage} />
                <h2 className={styles.imageTextTop}>{meme.topText}</h2>
                <h2 className={styles.imageTextBottom}>{meme.bottomText}</h2>
                </div>
        </main>
    )

};
