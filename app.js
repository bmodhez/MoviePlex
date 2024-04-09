  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCf304pvyc5txPwFhh77vVegCr6kuXiQCo",
    authDomain: "login-4f8fe.firebaseapp.com",
    projectId: "login-4f8fe",
    storageBucket: "login-4f8fe.appspot.com",
    messagingSenderId: "103979524779",
    appId: "1:103979524779:web:b67c76faa9d7926f990dee",
    measurementId: "G-WMZ73XRGNW"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = "en";
  const provider = new GoogleAuthProvider();

  document.getElementById("google").addEventListener("click",()=> {
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "../logged.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});
// app.js

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;

      if (!isValidEmail(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      if (!isValidPassword(password)) {
          alert('Please enter a password with at least 8 characters.');
          return;
      }

      // If validation passes, you can submit the form
      form.submit();
  });

  function isValidEmail(email) {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  function isValidPassword(password) {
      // Password should be at least 8 characters long
      return password.length >= 8;
  }
});
