"use client";

import Image from "next/image";
import styles from "./links.module.css";
import NavLink from "./navlink/navlink";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/themeToggle/themeToggle";


const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "CV",
    path: "/CV",
  },
  {
    title: "Blog",
    path: "/blog",
  }
];


// Define motion variants for open and closed states
const menuVariants = {
  open: {
    width: "125px",
    height: "fit-content",
    overflow: "hidden",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "44px",
    height: "44px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
  }
}


const Links = () => {
  // open side menu state
  const [open, setOpen] = useState(false);

  return (

      <div className={styles.container}>
        <div className={styles.links}>

          <div className={styles.themeToggle}>
            <ThemeToggle />
          </div>

          {links.map((link, i) => (
            <NavLink item={link} key={i} />
          ))}
      
        </div>

        <div className={styles.hidden}>
          <ThemeToggle/>
        </div>
          
        <div className={styles.motionContainer}>
          <motion.div
            className={styles.motionMenu}
            animate={open ? "open" : "closed"}  // Use the open state to toggle animation
            variants={menuVariants}  // Attach motion variants
            initial="open"  // Set initial state
            >
            <div className={styles.menuLinks}>
              {links.map((link, i) => (
                <NavLink item={link} key={i}/>
              ))}
            </div>
          </motion.div>
          <Image
            className={styles.menuButton}
            src="/menu.png"
            alt="Menu Icon"
            width={30}
            height={30}
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
    </div>
  );
};

export default Links;
