import styles from '../styles/Home.module.css'

export default function Posts( {posts} ) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <h1 className={styles.title}>Posts Details</h1>
                <ul>
                    {posts.map(posts => {
                        const { id , title , body} = posts;

                        return (
                            <li key={id} >
                                <h1 >{ title }</h1>
                                <p className={styles.code} > { body } </p>
                            </li>
                        )
                    })} 
                </ul>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const user = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await user.json()
    // console.log(posts)
    return {
        props: {
            posts
        }
    }
}