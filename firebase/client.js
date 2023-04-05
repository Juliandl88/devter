import * as firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCIwG0Oei94TxAS60EXCroZ2GKo5DSHv7Q",
    authDomain: "devter-6cc47.firebaseapp.com",
    projectId: "devter-6cc47",
    storageBucket: "devter-6cc47.appspot.com",
    messagingSenderId: "455427302368",
    appId: "1:455427302368:web:176c10b091bfd5cdc54185",
    measurementId: "G-Y2KM409BCX"
  };

  firebase.initializeApp(firebaseConfig)

  export const loginWithGitHub = () => {
    const githubProvider = new firebase.auth.GitHubAuthProvider()
    return firebase.auth().signInWithPopup(githubProvider)
  }