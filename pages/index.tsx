import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UploadForm from "../components/organisms/UploadForm"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unofficial CAH generator</title>
        <meta name="description" content="CAH" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
      Unofficial CAH generator
        </h1>
        <div><UploadForm/></div>
       
      </main>

      <footer className={styles.footer}>
        Recontent Kft
      </footer>
    </div>
  )
}

export default Home
