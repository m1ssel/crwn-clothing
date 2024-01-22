import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCAKrTvM_OgzjQHWQwGSsib4T2eWwT426s",
  authDomain: "crwn-db-66725.firebaseapp.com",
  projectId: "crwn-db-66725",
  storageBucket: "crwn-db-66725.appspot.com",
  messagingSenderId: "210374503646",
  appId: "1:210374503646:web:655493b8a0e22476b8e64f"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}