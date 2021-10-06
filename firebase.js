const firebaseConfig = {
    apiKey: "AIzaSyBB6D7p1uy8T-a5Yr6lzyb8c6uEm71dAa8",
    authDomain: "boat-lifestyle.firebaseapp.com",
    projectId: "boat-lifestyle",
    storageBucket: "boat-lifestyle.appspot.com",
    messagingSenderId: "932669920761",
    appId: "1:932669920761:web:77b08d5c3dc3f0135b9928",
    measurementId: "G-42MLK82FNQ"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
