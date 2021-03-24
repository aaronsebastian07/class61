import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCsge5WRxSUXjVhC_PmZy0LS54AW4AJ6Tw",
    authDomain: "wireless-buzz-cb334.firebaseapp.com",
    databaseURL: "https://wireless-buzz-cb334-default-rtdb.firebaseio.com",
    projectId: "wireless-buzz-cb334",
    storageBucket: "wireless-buzz-cb334.appspot.com",
    messagingSenderId: "26012810227",
    appId: "1:26012810227:web:4ec5e892040dc3bf667086",
    measurementId: "G-WMLNR5ZGQZ"
  };

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()