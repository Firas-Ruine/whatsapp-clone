import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import * as SecureStore from "expo-secure-store";

/**
 * Add your Firebase project configuration object here.
 *
 * You get this from the Firebase console.
 *
 * Go to your project settings and scroll down to the "Your apps" section.
 *
 * Click on the "Config" radio button and copy the object here.
 *
 * It should look something like this:
 *
 */
const firebaseConfig = {
  apiKey: "AIzaSyDI5w8MZcF5RmMCaPnusshJNSf2DtjYDCg",
  authDomain: "whatsapp-clone-fb1da.firebaseapp.com",
  projectId: "whatsapp-clone-fb1da",
  storageBucket: "whatsapp-clone-fb1da.appspot.com",
  messagingSenderId: "688799465473",
  appId: "1:688799465473:web:659103a4cf46618a3b4000",
  measurementId: "G-EEV9GM1TLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(SecureStore),
});

export { auth };
