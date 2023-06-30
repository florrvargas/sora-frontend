import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging } from "firebase/messaging"


const firebaseConfig = {
  apiKey: "AIzaSyA_L3GuLKlfEebK6qSzJRRhs8g9vf3k7rI",
  authDomain: "sora-383703.firebaseapp.com",
  projectId: "sora-383703",
  storageBucket: "sora-383703.appspot.com",
  messagingSenderId: "604842991860",
  appId: "1:604842991860:web:4a91583087ee4b76847ea1",
  measurementId: "G-7R65L88V9W"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

