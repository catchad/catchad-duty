import { database } from './firebase';

const SendTokenToServer = token => {
  database.ref(`/tokens`).once('value', snapshot => {
    if (snapshot.val() === null) {
      database.ref(`/tokens`).set([token]);
    } else {
      let isRepeatToken = false;
      snapshot.val().forEach(item => {
        if (item === token) {
          isRepeatToken = true;
        }
      });

      if (!isRepeatToken) {
        database.ref(`/tokens`).set([...snapshot.val(), token]);
      }
    }
  });
};

export default SendTokenToServer;
