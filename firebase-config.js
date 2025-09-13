<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABdYeYjP_TwygtcNZnQL_APVEoS-ud0ig",
    authDomain: "zuipschuit-17fc3.firebaseapp.com",
    projectId: "zuipschuit-17fc3",
    storageBucket: "zuipschuit-17fc3.firebasestorage.app",
    messagingSenderId: "631598878814",
    appId: "1:631598878814:web:80137d33a75974d63864cf",
    measurementId: "G-211T1HNM5G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>