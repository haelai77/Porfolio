import Link from "next/link"
import Links from "./links/links"
import styles from "./navbar.module.css"
import { Bungee_Outline } from "next/font/google"

const logoFont = Bungee_Outline({
    subsets: ['latin'],
    weight: "400",
})

const Navbar = async () => {

    return (
        <>
            <div className={styles.container}>
                    <Link href="/" className={`${styles.logo} ${logoFont.className}`}>Leo Lai ☕</Link>
                    <Links  className={styles.links}/>
            </div>
            <div className={styles.background}></div> 
        </>
    )
}

export default Navbar

