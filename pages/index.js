import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>

        <div className={styles.grid}>
          <a href="view?id=1" className={styles.card}>
            <h3>Camera 1</h3>
            <p>Room 1</p>
          </a>
          <a href="view?id=2" className={styles.card}>
            <h3>Camera 2</h3>
            <p>Rooftop</p>
          </a>
          <a href="view?id=3" className={styles.card}>
            <h3>Camera 3</h3>
            <p>Stairway</p>
          </a>
          <a href="view?id=4" className={styles.card}>
            <h3>Camera 4</h3>
            <p>Warehouse</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Test camera app
      </footer>
    </div>
  )
}
