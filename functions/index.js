const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');

const firebaseApp = admin.initializeApp(functions.config().firebase);

const database = firebaseApp.database();

const getTokens = () => {
  return database
    .ref('/tokens')
    .once('value')
    .then(snapshot => snapshot.val());
};

const app = express();

app.get('/tokens', (request, response) => {
  getTokens().then(value => {
    response.send(`${value.join(',')}`);
  });
});

exports.app = functions.https.onRequest(app);
