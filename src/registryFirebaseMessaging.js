import { messaging } from './firebase';
import SendTokenToServer from './SendTokenToServer';

const registryFirebaseMessaging = () => {
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
      })
      .catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err);
      });
  });
};

export default registryFirebaseMessaging;
