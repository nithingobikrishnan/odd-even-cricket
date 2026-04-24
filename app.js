import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrVyYIQk7pgMW05n4gYgTFwcLGZEh3IdI",
  authDomain: "odd-even-cricket-6fcb7.firebaseapp.com",
  projectId: "odd-even-cricket-6fcb7",
  storageBucket: "odd-even-cricket-6fcb7.firebasestorage.app",
  messagingSenderId: "56937015712",
  appId: "1:56937015712:web:93d3d5ed49ac99b13a5cc5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue, update };
