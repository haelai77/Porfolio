import styles from "./cv.module.css"

const CVpage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Leo's CV</h1>

            <h2>Education</h2>
            <h2>Skills</h2>
            <h2>Projects</h2>
            <h2>Hobbies</h2>

        </div>
    );
}

export default CVpage;