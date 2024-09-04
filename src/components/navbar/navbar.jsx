import Link from "next/link"
import Links from "./links/links"
import styles from "./navbar.module.css"
import { Bungee_Outline } from "next/font/google"
import { motion } from "framer-motion";

const logoFont = Bungee_Outline({
    subsets: ['latin'],
    weight: "400",
})

const Navbar = async () => {


    return (
        <div className={styles.container}>
            <Link href="/" className={`${styles.logo} ${logoFont.className}`}>Leo Lai ☕</Link>
            <Links />
        </div>
    )
}

export default Navbar

