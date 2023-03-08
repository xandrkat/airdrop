import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "xkatfcm.firebaseapp.com",
    databaseURL: "https://xkatfcm-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "xkatfcm",
    storageBucket: "xkatfcm.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASURMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'production') {
  firebase.analytics();

  firebase.firestore().enablePersistence()
    .catch(console.error);
}

export default firebase;
