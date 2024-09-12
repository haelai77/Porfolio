import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
	return (
		<div className={styles.container}>

			<div className={styles.textContainer}>
				<div className={styles.squareImg}>
					<Image src="/upscaled-2.jpeg" alt="" style={{ objectFit: "cover" }} fill />
				</div>			
				<h1 className={styles.title}>
					HEY THERE, I'M LEO!
				</h1>

				<div className={styles.section}>

						<div className={styles.intro}>

							<p className={styles.col}>
								I'm a Computer Science BSc graduate from the University of Bristol, with a First-Class Honors 🥇. I'm current pursing a MSc in Data Science and Machine Learning at UCL 🤓.
							</p>

							<p className={styles.col}>
								An aspiring software developer with an interest in AI and ML who's self-motivated and enjoys solving problems. My hobbies include programming💻, rock climbing🧗‍♂️ and playing the piano🎹!
							</p>

							<p className={styles.row}>
								🎉I've just completed a devops internship with the High Performance Computing Group at the University of Bristol working on a CPU simulation framework!🎉
							</p>
							
						</div>


					<div className={styles.iconContainer}>

						<a href="https://github.com/haelai77" className={styles.iconLink}>
							<div className={styles.icon}>
								<Image src="/github.png" alt="" fill/>
							</div>
							Github
						</a>

						<a href="https://www.linkedin.com/in/leo-j-lai/" className={styles.iconLink}>
							<div className={styles.icon}>
								<Image src="/linkedin.png" alt="" fill/>
							</div>
							Linkedin
						</a>

						<a href= "mailto: leojacklai@outlook.com" className={styles.iconLink}>
							<div className={styles.icon}>
								<Image src="/email.png" alt="" fill/>
							</div>
							Email
						</a>

					</div>
				</div>
			</div>

			<div className={styles.imgContainer}>
				<Image src="/upscaled.jpg" alt="" style={{ objectFit: "cover" }} fill />
			</div>
		</div>
	);
}

export default Home;