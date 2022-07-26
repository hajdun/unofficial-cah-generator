import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { ICard } from '../../types/Card'

interface ICardProps {
  card: ICard
}

const Card: React.FC<ICardProps> = ({ card }) => {
  const cardRef = React.createRef<HTMLDivElement>()

  const [extraStyle, setExtraStyle] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      const currentCard = cardRef.current
      const hasOverflowingChildren = currentCard.offsetHeight < currentCard.scrollHeight ||
        currentCard.offsetWidth < currentCard.scrollWidth

      setExtraStyle(hasOverflowingChildren)
    }
  }, [])

  return <div
        ref={cardRef}
        className={`${styles.card} ${card.isQuestion === 'true' ? styles.question : styles.answer} ${extraStyle ? styles.extraStyle : ''}`}
    >
        {card.text}
    </div>
}

export default Card
