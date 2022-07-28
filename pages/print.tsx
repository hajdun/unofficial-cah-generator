import React, { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/print.module.css'
import CardList from '../components/molecules/CardList'
import { ICard } from '../types/Card'

const Print: NextPage = () => {
  const [cards, setCards] = useState<ICard[]>([])

  return (
        <div className={styles.container}>
            <CardList isEdit={false} cards={cards} setCards={setCards} isUnfunnyHidden={true}/>
        </div>
  )
}

export default Print
