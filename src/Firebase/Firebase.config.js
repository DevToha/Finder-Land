// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkyxxURgHLJ7tVSgglwUnJlpm7AFJ5oNA",
    authDomain: "assignment-9-f3d6c.firebaseapp.com",
    projectId: "assignment-9-f3d6c",
    storageBucket: "assignment-9-f3d6c.appspot.com",
    messagingSenderId: "25185366385",
    appId: "1:25185366385:web:6c40b3b8331e31fdf346d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;