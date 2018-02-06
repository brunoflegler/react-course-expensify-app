import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDd6o6CaFLcYRHGbP0BgB3oK5hWABAHB80",
    authDomain: "expensify-b34a1.firebaseapp.com",
    databaseURL: "https://expensify-b34a1.firebaseio.com",
    projectId: "expensify-b34a1",
    storageBucket: "expensify-b34a1.appspot.com",
    messagingSenderId: "543463336569"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };