import * as firebase from "firebase/app";
import  { firebaseConfig } from "../firebaseConfig";
import { getFirestore, collection, getDocs, doc, setDoc} from "firebase/firestore";

export const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const COLLECTION_NAME="cards"
const cardsCol=collection(db, COLLECTION_NAME)


// Get a list of cards from your database
export const getCards = async () => {
  const cardSnapshot = await getDocs(cardsCol);
  const cardList = cardSnapshot.docs.map((doc) => doc.data());
  return cardList;
};

 // Push Function
 export const addCard = (text: string, isQuestion: boolean, language="hu_HU", isFunny=true ) => {
  setDoc(doc(cardsCol),{
        text,
        isQuestion,
        language,
        isFunny
    }).then(()=>{
      return getCards()
    })
  }