// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAN10Gs6h0hnR7NfTM8Rdu342YFuG8frE",
    authDomain: "userauthentication-51076.firebaseapp.com",
    projectId: "userauthentication-51076",
    storageBucket: "userauthentication-51076.appspot.com",
    messagingSenderId: "330749839516",
    appId: "1:330749839516:web:aa094b1e9763dab5700559",
    measurementId: "G-TH60MMG710"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();



// submit button
const submit= document.getElementById("submit");
submit.addEventListener("click", function(event){
    event.preventDefault()

    // inputs
const email = document.getElementById('email').value;
const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account..")
    window.location.href = "index.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})