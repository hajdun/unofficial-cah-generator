import { uuidv4 } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { getCards } from "../../api/firebase";
import { ICard } from "../../types/Card";
import Card from "../atoms/Card";
import styles from "./CardList.module.css"

const CardList: React.FC = () => {
    const [cards, setCards] = useState<ICard[]>([])

    useEffect(() => {
        getCards().then((cardList) => {
            setCards(cardList);
        });
    }, []);

    return (
        <div className={styles.cardList}>
            {cards.map(card => {
                return <Card key={uuidv4()} card={card}/>
            })}
        </div>
    );
};

export default CardList;
