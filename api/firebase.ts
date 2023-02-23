import * as firebase from 'firebase/app'
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from 'firebase/firestore'
import { ICard } from '../types/Card'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

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
