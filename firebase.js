var app_firebase={};
(function()
{
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBtmaUSV7fsAjafdnjJCQSkQy0mfo-5pmY",
    authDomain: "test-4e4c6.firebaseapp.com",
    databaseURL: "https://test-4e4c6.firebaseio.com",
    projectId: "test-4e4c6",
    storageBucket: "test-4e4c6.appspot.com",
    messagingSenderId: "736568468599",
    appId: "1:736568468599:web:2b925c05c356eb2d4b1272",
    measurementId: "G-XPWWQCWV56"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  app_firebase=firebase;
})()
