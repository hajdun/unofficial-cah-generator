import React, { useEffect, useState } from 'react'
import styles from './Card.module.css'
import { ICard } from '../../types/Card'
import Button from './Button'
import { deleteCard } from '../../api/firebase'
import Logo from './Logo'

interface ICardProps {
  card: ICard,
  isEdit?: boolean,
  classes?: string
}

const Card: React.FC<ICardProps> = ({ card, isEdit = false, classes }) => {
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

  const deleteCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.getAttribute('id')
    if (id) { deleteCard(id) }
  }

  return <div className={`${styles.container} ${classes}`}>
    <div
      ref={cardRef}
      className={`${styles.card} ${card.isQuestion === 'true' ? styles.question : styles.answer} ${extraStyle ? styles.extraStyle : ''}`}
    >
      <div>
        {card.text}</div>
      <div
       className={`${styles.logoContainer} ${card.isQuestion === 'true' ? styles.question : styles.answer}`}
     >
        <Logo width='15px' height='15px' color={'currentColor'}/>
        Cards Against Humanity
      </div>
    </div>
    <div>
      {isEdit && <div className={styles.buttonContainer}>
        <Button id={card.id && card.id} text="Delete" onClick={deleteCardClick}></Button>
      </div>}
    </div>
  </div>
}

export default Card
