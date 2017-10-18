import * as firebase from 'firebase';

console.log('firebase tab')
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase , googleAuthProvider, database as default }




// ---- Playground stufff
// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     })
//     console.log(expenses)
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//       const expenses = []
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       })
//       console.log(expenses)
//   })


// database.ref('expenses').push({
//   title: 'Dog',
//   body: 'Woooof'
// })

// const firebaseNotes = {
//   notes: {
//     apopopiaf : {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     apopfopaofa : {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// }
// const notes = [{
//   id: '12',
//   title: 'First note',
//   body:' This is my note'
// }, {
//   id: '141414',
//   title: 'Another note',
//   body:' This is my note'
// }]
//
// database.ref('notes').set(notes)

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//
//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e)
//   })
//
// database.ref().set({
//   name: 'John Carlos',
//   age: 26,
//   isSingle: false,
//   location: {
//     city: 'New York',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!')
// })
//
// database.ref().update({
//   name: 'John Cena',
//   age: 31,
//   isSingle: null,
//   job: 'software developer'
// })

//
// database.ref('/location/city').set('Seattle')
//
// database.ref('attributes').set({
//   height: 80,
//   weight: 170
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// })

// database.ref('age').remove()
