const firebaseConfig = {
 apiKey:"AIzaSyCrVyYIQk7pgMW05n4gYgTFwcLGZEh3IdI",
 databaseURL:"https://odd-even-cricket-6fcb7-default-rtdb.asia-southeast1.firebasedatabase.app"
};

if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

function getRoom(){
 return new URLSearchParams(location.search).get("room");
}
