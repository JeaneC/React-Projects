import * as firebase from 'firebase';

console.log('firebase tab')
const config = {
  apiKey: "AIzaSyAEjCGrJj_hwG1GH-x8MVkZgzNV73HIevk",
  authDomain: "expensif-eb646.firebaseapp.com",
  databaseURL: "https://expensif-eb646.firebaseio.com",
  projectId: "expensif-eb646",
  storageBucket: "expensif-eb646.appspot.com",
  messagingSenderId: "323280638000"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('notes').push({
  title: 'To Doaa',
  body: 'Go for aaagagagag run'
})

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
