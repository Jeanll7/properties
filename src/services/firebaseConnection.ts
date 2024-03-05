
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from  'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCOo3Kshqur9GCGwZIolZBRxbrWRDGq3_s",
  authDomain: "webimoveis-318f4.firebaseapp.com",
  projectId: "webimoveis-318f4",
  storageBucket: "webimoveis-318f4.appspot.com",
  messagingSenderId: "470654058062",
  appId: "1:470654058062:web:424ceca722571e6d190d1f"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage } 
