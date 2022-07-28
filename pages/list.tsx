import React, { useState } from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import CardList from '../components/molecules/CardList'
import { ICard } from '../types/Card'
import Button from '../components/atoms/Button'

const Home: NextPage = () => {
  const [cards, setCards] = useState<ICard[]>([])
  const [isUnfunnyHidden, setIsUnfunnyHidden] = useState(false)

  const sortOutQuestionsAnswers = () => {
    if (!cards || cards.length <= 0) return
    const questions = []
    const answers = []
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i]
      if (card.isQuestion === 'true') {
        questions.push(card)
      } else {
        answers.push(card)
      }
    }
    const separatedArray = [...questions, ...answers] || cards
    setCards(separatedArray)
  }

  const compare = (a: ICard, b: ICard) => {
    if (a.text < b.text) {
      return -1
    }
    if (a.text > b.text) {
      return 1
    }
    return 0
  }

  const sortAlpha = () => {
    if (!cards || cards.length <= 0) return
    const sortedArray = cards.sort(compare) || cards
    setCards([...sortedArray])
  }

  const hideUnfunny = () => {
    setIsUnfunnyHidden(true)
  }

  return (
        <div className={styles.container}>
            <div className={styles.cardListActions}>
        <div>
          <Button onClick={sortOutQuestionsAnswers} text="Separate questions from answers"></Button>
        </div>
        <div>
          <Button onClick={sortAlpha} text="Sort alphabetically"></Button>
        </div>
        <div>
          <Button onClick={hideUnfunny} text="Hide unfunny"></Button>
        </div>
      </div>
            <CardList isEdit={true} isUnfunnyHidden={isUnfunnyHidden} cards={cards} setCards={setCards}/>
        </div>
  )
}

export default Home
