"use client"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./themeToggle.module.css"
import Image from "next/image";


const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    const icon_size = 25;

    return (
        <div onClick={handleTheme} className={styles.toggle}>
            <div className={styles.icons}>
                <Image
                    className={styles.sun}
                    src="/sun.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="Sun"
                />
                <Image
                    className={styles.moon}
                    src="/moon.svg"
                    width={icon_size}
                    height={icon_size}
                    alt="Moon"
                />
            </div>
        </div>
    );
}

export default ThemeToggle;