  // ініціалізація Firebase
  var config = {
    apiKey: "AIzaSyAVgHb4BeQ2sJiTysnhNIw_-wNwxgeDpgk",
    authDomain: "chat-8cebc.firebaseapp.com",
    databaseURL: "https://chat-8cebc.firebaseio.com",
    storageBucket: "chat-8cebc.appspot.com",
    messagingSenderId: "468291635018"
  };
  firebase.initializeApp(config);
  
angular.module('chat', []); // підключення додатка як модуля Angular