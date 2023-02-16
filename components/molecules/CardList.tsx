import { uuidv4 } from '@firebase/util'
import React, { useEffect } from 'react'
import { getCards } from '../../api/firebase'
import { ICard } from '../../types/Card'

import Card from '../atoms/Card'
import styles from './CardList.module.css'

interface ICardList {
  isEdit: boolean,
  cards: ICard[],
  setCards?: (args:any[]) => void,
  isUnfunnyHidden?: boolean,
}

const CardList: React.FC<ICardList> = ({
  isEdit,
  cards,
  setCards,
  isUnfunnyHidden = false
}) => {
  useEffect(() => {
    if ((!cards || cards.length <= 0) && typeof setCards === 'function') {
      getCards().then((cardList) => {
        setCards(cardList)
      })
    }
  }, [])

  // 20th card to get a class for print page break
  return (
      <div className={styles.cardList}>
        {cards.map((card, index) => {
          if (isUnfunnyHidden && card.isFunny === false) return ''
          const PRINT_PAGE_BREAK_INDEX = 21
          const printPageBreakClass = index % PRINT_PAGE_BREAK_INDEX === 0 ? 'printPageBreak' : ''
          return <Card key={uuidv4()} card={card} isEdit={isEdit} classes={printPageBreakClass} />
        })}
      </div>
  )
}

export default CardList
