import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAy6Qd9p2MqnW9sLTMYdJ95cuDUL_5am8A",
  authDomain: "facebook-clone-416f5.firebaseapp.com",
  projectId: "facebook-clone-416f5",
  storageBucket: "facebook-clone-416f5.appspot.com",
  messagingSenderId: "761230573012",
  appId: "1:761230573012:web:448b2b22202936eedcaa41",
  measurementId: "G-N3TZKJ63WZ"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth()
const provider=new firebase.auth.GoogleAuthProvider()

export {auth,provider}
export default db