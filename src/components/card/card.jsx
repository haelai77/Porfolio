import styles from "./card.module.css"

const Card = ({post}) => {
    return (
        <div className={styles.card}>
            {/* top div contains image if it exists */}
            <div className={styles.top}> 

                {post.img && <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img}/>
                </div>}
            </div>

            {/* bottom div contains the body/description */}
            <div className={styles.bottom}>
                <h2>{post.title}</h2>
                
                <p className={styles.desc}>{post.body}</p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
            </div>

        </div>
    );
}

export default Card;