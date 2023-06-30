importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
 importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
    apiKey: "AIzaSyA_L3GuLKlfEebK6qSzJRRhs8g9vf3k7rI",
    authDomain: "sora-383703.firebaseapp.com",
    projectId: "sora-383703",
    storageBucket: "sora-383703.appspot.com",
    messagingSenderId: "604842991860",
    appId: "1:604842991860:web:4a91583087ee4b76847ea1",
    measurementId: "G-7R65L88V9W"
 };

 const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage(payload => {
    console.log("Recibiste mensaje mientras estabas ausente");
// previo a mostrar notificación
    const notificationTitle= payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }


    return self.registration.showNotification(
        notificationTitle, 
        notificationOptions
    )
})


 