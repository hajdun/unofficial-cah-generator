import '../styles/globals.css'
import type { AppProps } from 'next/app'
//import * as firebase from "firebase/app";
//import "firebase/database";
//import { FirebaseDatabaseProvider } from "@react-firebase/database";
//import {firebaseConfig} from "../firebaseConfig"

function MyApp({ Component, pageProps }: AppProps) {
  return  <Component {...pageProps} />
  //<FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
  //  </FirebaseDatabaseProvider>
}

export default MyApp
