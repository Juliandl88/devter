import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIwG0Oei94TxAS60EXCroZ2GKo5DSHv7Q",
  authDomain: "devter-6cc47.firebaseapp.com",
  projectId: "devter-6cc47",
  storageBucket: "devter-6cc47.appspot.com",
  messagingSenderId: "455427302368",
  appId: "1:455427302368:web:176c10b091bfd5cdc54185",
  measurementId: "G-Y2KM409BCX",
};

!firebase.apps.length &&
  firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const {displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user)
      onChange(normalizedUser)
    })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
}
