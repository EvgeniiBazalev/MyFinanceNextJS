import firebase from 'firebase/app';
import 'firebase/firestore'; // Импорт модулей Firestore, Realtime Database и других по мере необходимости
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDv4mcbmQFBi9U9ppVTH92IdZenvGEoBQA",
    authDomain: "myfinancenextjs.firebaseapp.com",
    projectId: "myfinancenextjs",
    storageBucket: "myfinancenextjs.appspot.com",
    messagingSenderId: "364877721555",
    appId: "1:364877721555:web:36dc4870b21c298ca70926",
    measurementId: "G-1VZL4J9KN4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;