import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyC57M_I5gVbBX-xSQ943zgotehzXK_NElc",
  authDomain: "crwn-db-8c10b.firebaseapp.com",
  databaseURL: "https://crwn-db-8c10b.firebaseio.com",
  projectId: "crwn-db-8c10b",
  storageBucket: "",
  messagingSenderId: "201662498077",
  appId: "1:201662498077:web:7190a8a3a769018f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;