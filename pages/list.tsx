import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import CardList from '../components/molecules/CardList'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <CardList />
        </div>
    )
}

export default Home
