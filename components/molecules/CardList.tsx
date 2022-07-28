import { uuidv4 } from '@firebase/util'
import React, { useEffect } from 'react'
import { getCards } from '../../api/firebase'
import { ICard } from '../../types/Card'

import Card from '../atoms/Card'
import styles from './CardList.module.css'

interface ICardList {
  isEdit: boolean,
  cards: ICard[],
  setCards: () => void,
  isUnfunnyHidden: boolean,
}

const CardList: React.FC<ICardList> = ({
  isEdit,
  cards,
  setCards,
  isUnfunnyHidden
}) => {
  useEffect(() => {
    if (!cards || cards.length <= 0) {
      getCards().then((cardList) => {
        setCards(cardList)
      })
    }
  }, [])

  return (
      <div className={styles.cardList}>
        {cards.map(card => {
          if (isUnfunnyHidden && card.isFunny === false) return ''
          return <Card key={uuidv4()} card={card} isEdit={isEdit} />
        })}
      </div>
  )
}

export default CardList
