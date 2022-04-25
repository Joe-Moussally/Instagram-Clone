import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHE-O10AfpnG3qSyTZZUKYQQZ19HIC0jU",
    authDomain: "instaclone-3d792.firebaseapp.com",
    projectId: "instaclone-3d792",
    storageBucket: "instaclone-3d792.appspot.com",
    messagingSenderId: "1050865510261",
    appId: "1:1050865510261:web:1633dba78685addffdd53c",
    measurementId: "G-LEH10R6CQJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firetore();

  export { projectStorage, projectFirestore };