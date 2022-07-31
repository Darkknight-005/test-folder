import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCRmI4RKneCA9w8CyWQ4I3-4rejYF1dBdg",
  authDomain: "linkedin-clone-005.firebaseapp.com",
  projectId: "linkedin-clone-005",
  storageBucket: "linkedin-clone-005.appspot.com",
  messagingSenderId: "458090875381",
  appId: "1:458090875381:web:bdc7979d80f3d4497738bc"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);

 export const db = firebaseApp.firestore();
 export const auth = firebase.auth();

 