import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrVyYIQk7pgMW05n4gYgTFwcLGZEh3IdI",
  authDomain: "odd-even-cricket-6fcb7.firebaseapp.com",
  databaseURL: "https://odd-even-cricket-6fcb7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "odd-even-cricket-6fcb7",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, onValue, update };
