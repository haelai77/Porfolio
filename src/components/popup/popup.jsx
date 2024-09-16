"use client"

import Image from "next/image";
import styles from "./popup.module.css";
import { Bruno_Ace_SC } from "next/font/google";
import { useState } from "react";

const logoFont = Bruno_Ace_SC({
    subsets: ['latin'],
    weight: "400",
})


const Popup = () => {
// 
    const [open, setOpen] = useState(true)
    
    if(!open){
        return (null);
    }

    return (
        <div className={styles.popup_container}>
            <div className={styles.popup}>
                <h2 className={`${logoFont.className} ${styles.title}`}>🔨 W.I.P 🔨</h2>
                <p>I'm still adding some pages and features!</p>
                <div className={styles.imgContainer}>
                    <Image
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDh6dXh6bWxpbHlrZTgwZHA2ZGVwbjAxd3VwM29xNTJucnhsYjRxZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PdpT9kNlBtV3Nqlmbg/giphy.webp"
                        alt="wip gif"
                        width={200}
                        height={100}
                        style={{ width: '100%', height:'auto' }}
                    />
                </div>
                <div className={styles.todo}>
                    <h3>Todo:</h3>
                    <ul className={styles.todolist}>
                        <li>CV page 📝</li>
                        <li>Contact page 📱</li>
                        <li>Login option 🚪</li>
                    </ul>
                </div>
                <button
                    className={styles.button}
                    onClick={() => {setOpen(!open)}}
                >
                        Close
                </button>
            </div>
        </div>
    );
};

export default Popup;