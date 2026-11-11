import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJwMUwLCJxuCB11rkqN4CoUFLkTDY6_0A",
  authDomain: "app-congelados-da-sil.firebaseapp.com",
  projectId: "app-congelados-da-sil",
  storageBucket: "app-congelados-da-sil.firebasestorage.app",
  messagingSenderId: "38121352221",
  appId: "1:38121352221:web:18a4eeedc3b40285ff6af4",
  measurementId: "G-CLZ9F9FS8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      try {
        analytics = getAnalytics(app);
      } catch (e) {
        console.warn("Analytics not initialized:", e);
      }
    }
  }).catch(() => {});
}

