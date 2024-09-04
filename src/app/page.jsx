import Image from "next/image";
import styles from "./page.module.css"

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>

				<h1 className={styles.title}>
					HEY THERE! I'M LEO.
				</h1>

				<div className={styles.section}>
					<p className={styles.intro}>
						I'm a Computer Science BSc graduate from the University of Bristol, with a First-Class Honors 🥇. I'm current pursing a MSc in Data Science and Machine Learning at UCL 🤓. <br /><br />
						An aspiring software developer with an interest in AI and ML who's self-motivated and enjoys solving problems. My hobbies include programming💻, rock climbing🧗‍♂️ and playing the piano🎹!<br /><br />
						🎉I've just completed a devops internship with the High Performance Computing Group at the University of Bristol working on a CPU simulation framework!🎉
					</p>
					<div className={styles.iconContainer}>
						<div className={styles.icon}>
							<Image src="/github.png" alt="" width={40} height={40}/>
							<a href="https://github.com/haelai77">Github</a>
						</div>
						<div className={styles.icon}>
							<Image src="/linkedin.png" alt="" width={40} height={40}/>
							<a href="https://www.linkedin.com/in/leo-j-lai/">Linkedin</a>
						</div>
						<div className={styles.icon}>
							<Image src="/email.png" alt="" width={40} height={40}/>
							<a href= "mailto: leojacklai@outlook.com"> Email </a>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src="/home_image.jpg" alt="" style={{ objectFit: "cover" }} fill />
			</div>
		</div>
	);
}

export default Home;