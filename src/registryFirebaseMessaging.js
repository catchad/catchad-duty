import { messaging } from './firebase';
import SendTokenToServer from './SendTokenToServer';
import SendTokenToTopic from './SendTokenToTopic';
import DeleteTokenToTopic from './DeleteTokenToTopic';

const registryFirebaseMessaging = currentUser => {
  messaging
    .requestPermission()
    .then(function() {
      console.log('Notification permission granted.');
      console.log(messaging);
      return messaging.getToken();
    })
    .then(function(token) {
      console.log(token);
      SendTokenToServer(token);
      DeleteTokenToTopic(token, () => {
        SendTokenToTopic(token, currentUser);
      });
    })
    .catch(function(err) {
      console.log('Unable to get permission to notify.', err);
    });
  messaging.onTokenRefresh(function() {
    messaging
      .getToken()
      .then(function(refreshedToken) {
        console.log('Token refreshed.');
        SendTokenToServer(refreshedToken);
        DeleteTokenToTopic(refreshedToken, () => {
          SendTokenToTopic(refreshedToken, currentUser);
        });
      })
      .catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err);
      });
  });
};

export default registryFirebaseMessaging;
