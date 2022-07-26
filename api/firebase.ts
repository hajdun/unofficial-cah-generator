import * as firebase from 'firebase/app'
import { firebaseConfig } from '../firebaseConfig'
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { ICard } from '../types/Card'

export const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)
const COLLECTION_NAME = 'cards'
const cardsCol = collection(db, COLLECTION_NAME)

// Get a list of cards from your database
export const getCards = async () => {
  const cardSnapshot = await getDocs(cardsCol)
  const cardList = cardSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return cardList
}

// Push Function
export const addCard = (card: ICard) => {
  setDoc(doc(cardsCol), card)
}

export const deleteCard = (id: string) => {
  if (!id) return
  const docRef = doc(db, COLLECTION_NAME, id)
  deleteDoc(docRef)
}
