// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9o8j7JGeVPIPASGEOSrPBvXYKE3B7DsM",
  authDomain: "website-9130d.firebaseapp.com",
  projectId: "website-9130d",
  storageBucket: "website-9130d.firebasestorage.app",
  messagingSenderId: "543054362685",
  appId: "1:543054362685:web:7eaec20b3b17fcc52e5254",
  measurementId: "G-CY77678FF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const email =document.getElementById('email').value;
const password =document.getElementById('password').value;

// submit button
const button =document.getElementById('submit');
submit.addEventListener("click",function(event){
event.preventDefault()
alert(5)
})