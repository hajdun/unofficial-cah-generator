import * as firebase from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cards from your database
export const getCards = async () => {
  const cardsCol = collection(db, "cards");
  const cardSnapshot = await getDocs(cardsCol);
  const cardList = cardSnapshot.docs.map((doc) => doc.data());
  return cardList;
};
