import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import {
  getDatabase, ref, set, update, get, onValue
} from "https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrVyYIQk7pgMW05n4gYgTFwcLGZEh3IdI",
  authDomain: "odd-even-cricket-6fcb7.firebaseapp.com",
  databaseURL: "https://odd-even-cricket-6fcb7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "odd-even-cricket-6fcb7",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, update, get, onValue };
