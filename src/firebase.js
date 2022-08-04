import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCRmI4RKneCA9w8CyWQ4I3-4rejYF1dBdg",
  authDomain: "linkedin-clone-005.firebaseapp.com",
  projectId: "linkedin-clone-005",
  storageBucket: "linkedin-clone-005.appspot.com",
  messagingSenderId: "458090875381",
  appId: "1:458090875381:web:bdc7979d80f3d4497738bc"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


//  dataBase collection of posts

// useEffect(() => {
//   const q = query(collection(db, 'posts'))
//   const dataRef = onSnapshot(q, (querySnapshot) => {
//     const dataArr = []
//     querySnapshot.forEach((doc) => {
//       dataArr.push({ ...doc.data(), id: doc.id })
//     })
//     setPosts(dataArr)
//   })


//   return () => dataRef()
// }, [])

// addDocs for post

//  const post_data = () => {
//   const colRef = collection(db, "posts")
//   setDoc(doc(colRef),{
//     Name: 'Dark knight',
//     Description: new Date(),
//     Message: spost,
//     TimeStamp: serverTimestamp()
//   })
// }
