import Head from 'next/head'
import styles from '../../styles/Createpost.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sabiq Thottoly Basheer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Create New Post
        </h1>

        <p className={styles.description}>
            Type your thoughts here,feel freeee :)
        </p>

        <textarea className={styles.postInput}>

        </textarea>
      </main>

    </div>
  )
}
