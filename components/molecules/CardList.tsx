import { uuidv4 } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { getCards } from "../../api/firebase";
import { ICard } from "../../types/Card";
import Card from "../atoms/Card";
import styles from "./CardList.module.css"

const CardList: React.FC = () => {
    const [cards, setCards] = useState<ICard[]>([])
    const [isUnfunnyHidden, setIsUnfunnyHidden] = useState(false)

    useEffect(() => {
        if (!cards || cards.length <= 0)
            getCards().then((cardList) => {
                setCards(cardList);
            });
    }, []);

    const sortOutQuestionsAnswers = () => {
        if (!cards || cards.length <= 0) return
        let questions = []
        let answers = []
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i]
            if (card.isQuestion === "true") {
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
            return -1;
        }
        if (a.text > b.text) {
            return 1;
        }
        return 0;
    }

    const sortAlpha = () => {
        if (!cards || cards.length <= 0) return
        const sortedArray = cards.sort(compare) || cards;
        setCards([...sortedArray])
    }

const hideUnfunny=()=>{
    setIsUnfunnyHidden(true)
}

    return (
        <div>
            <div className={styles.cardListActions}>
                <div>
                    <button className={styles.button} onClick={sortOutQuestionsAnswers}>Separate questions from answers</button>
                </div>
                <div>
                    <button className={styles.button} onClick={sortAlpha}>Sort alphabetically</button>
                </div>
                <div>
                    <button className={styles.button} onClick={hideUnfunny}>Hide unfunny</button>
                </div>
            </div>
            <div className={styles.cardList}>
                {cards.map(card => {
if(isUnfunnyHidden && card.isFunny===false) return ""
                    return <Card key={uuidv4()} card={card} />
                })}
            </div>
        </div>
    );
};

export default CardList;
