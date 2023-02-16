import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UploadForm from '../components/organisms/UploadForm'
import QuestionorAnswerForm from '../components/molecules/QuestionOrAnswerForm'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import TabPanel from '../components/atoms/TabPanel'
import Link from 'next/link'

const Home: NextPage = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTabIndex(newValue)
  }

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="CAH" />
      </Head>
      <main className={styles.main}>
        <div className={styles.title}>
          <div>
          <h1 >
            Unofficial CAH generator
          </h1></div> <div>
          <Link href="/list">
            <a>
              List all cards
            </a>
          </Link></div>
        </div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={currentTabIndex} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Upload cards from file" value={0} />
              <Tab label="Add cards in form" value={1} />
            </Tabs>
          </Box>
          <TabPanel value={currentTabIndex} index={0}>
              <UploadForm />
          </TabPanel>
          <TabPanel value={currentTabIndex} index={1}>
              <QuestionorAnswerForm />
          </TabPanel>
        </Box>

      </main>
      <footer className={styles.footer}>
        <div className={styles.company}>
        Recontent Kft
        </div>
      </footer>
    </div>
  )
}

export default Home
