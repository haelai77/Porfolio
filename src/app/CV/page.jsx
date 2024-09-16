import Image from "next/image";
import styles from "./cv.module.css";
import { Pacifico } from "next/font/google";


const titleFont = Pacifico({
    subsets: ['latin'],
    weight: "400",
})

const CVpage = () => {
    return (
        <div className={styles.container}>
            {/* <h1 className={`${styles.title} ${titleFont.className}`}>Curriculum Vitae...</h1>

            <div className={styles.content}>
                <h2 className={`${titleFont.className} ${styles.name}`}>Leo Jack Lai</h2>

                <h2 className={`${styles.sectionName} ${titleFont.className}`}>Education</h2>
                    <div className={styles.section}>
                        <div>
                            <div className={styles.section_item}>
                                <h3>University College London</h3>
                                <h3>Sept 2024 - Sept 2025</h3>
                            </div>
                            <ul>
                                <li>MSc Data Science and Machine Learning</li>
                            </ul>
                        </div>
                        <div>
                            <div className={styles.section_item}>
                                <h3>University Of Bristol</h3>
                                <h3>Sept 2021 - June 2024</h3>
                            </div>
                            <ul>
                                <li>BSc Computer Science</li>
                                <li>1st Class Honors 75% average</li>
                                <li>Computer Vision, Machine Learning, Artifical Intelligence, Security Behaviours ...</li>
                                <li><a href="https://github.com/haelai77/IACO-For-Autonomous-Cars" className="link"><b>Thesis</b>: Inverse Ant Colony Optimisation for Autonomous Cars To Reduce Congestion.</a></li>
                            </ul>
                        </div>
                    </div>

                <h2 className={`${styles.sectionName} ${titleFont.className}`}>Skills</h2>
                    <div className={styles.section}>
                            <div className={styles.subSection}>
                                <b>Languages:</b>
                                    Python, JavaScript, Java, C, Golang, SQL(SQLite)
                                <b>Technologies:</b>
                                    Git, Github Actions, Docker, Google Cloud, MongoDB, VSCode, PyCharm, IntelliJ
                                <b>Libraries/Frameworks:</b>
                                    Pandas, NumPy, Jester, Unittest, Next.js, Auth.js, TailwindCSS
                            </div>
                    </div>

                <h2 className={`${styles.sectionName} ${titleFont.className}`}>Experience</h2>
                    <div className={styles.section}>
                        <div>
                            <div className={styles.section_item}>
                                <h3>High Performance Computing Group Devops Intern</h3>
                                <h3>Sept 2024 - Sept 2025</h3>
                            </div>
                            <ul>
                                <li>MSc Data Science and Machine Learning</li>
                            </ul>
                        </div>
                    </div>
                <h2 className={`${styles.sectionName} ${titleFont.className}`}>Projects</h2>
                <h2 className={`${styles.sectionName} ${titleFont.className}`}>Hobbies</h2>
            </div> */}

            <button className={styles.button}>
                <a href="/CV_Sept_2024.pdf" download>Download Leo's CV</a>
            </button>
            
            <div className={styles.imgContainer}>
                <Image
                    src="/CV_Sept_2024.jpg"
                    alt=""
                    fill
                    />
            </div>

        </div>
    );
}

export default CVpage;