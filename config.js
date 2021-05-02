
  import firebase from 'firebase'
  require('@firebase/firestore')
  
  var firebaseConfig = {
    apiKey: "AIzaSyDkFowedjJNFg_aOVa97QyyM6hNnbQdPUQ",
    authDomain: "project-71-3e5ab.firebaseapp.com",
    projectId: "project-71-3e5ab",
    storageBucket: "project-71-3e5ab.appspot.com",
    messagingSenderId: "100469957853",
    appId: "1:100469957853:web:a24c645ed56d483236a734"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
