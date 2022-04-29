/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {

    apiKey: "AIzaSyCnBS6H2Hpf_uJXxqqQcloj17AOW8iADVQ",
    authDomain: "cafe-analog-aa881.firebaseapp.com",
    databaseURL: "https://cafe-analog-aa881-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cafe-analog-aa881",
    storageBucket: "cafe-analog-aa881.appspot.com",
    messagingSenderId: "1091539673530",
    appId: "1:1091539673530:web:d1804770f71ebfe803bd83",
    measurementId: "G-H2HM46QKMP"

};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}