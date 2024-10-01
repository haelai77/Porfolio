import Card from '../../components/card/Card';
import styles from "./blog.module.css"


const getData = async () => {

    const test = [
        {   
            "id": 1,
            "title": "Test Title",
            "desc": "Test Desc",
        },
    ]

    return test
}

const BlogPage = async () => {

    const posts = await getData();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <card post={post} />
                </div>
            ))}
        </div>
    );
}

export default BlogPage;