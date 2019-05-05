import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCauRh0IfCe5UFchj8yf96iWSYIRR-x2Ps",
    authDomain: "planner-5cbd7.firebaseapp.com",
    databaseURL: "https://planner-5cbd7.firebaseio.com",
    projectId: "planner-5cbd7",
    storageBucket: "planner-5cbd7.appspot.com",
    messagingSenderId: "427185852212",
    appId: "1:427185852212:web:b934b61903553c82"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore.settings({ timestampsInSnapshots: true });

export default firebase;