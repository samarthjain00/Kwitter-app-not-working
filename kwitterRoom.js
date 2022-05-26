
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAokAQDCnTAxd5eJC3EABVBb3P8HmT5UHM",
    authDomain: "kwitter-2fb71.firebaseapp.com",
    databaseURL: "https://kwitter-2fb71-default-rtdb.firebaseio.com",
    projectId: "kwitter-2fb71",
    storageBucket: "kwitter-2fb71.appspot.com",
    messagingSenderId: "332734652042",
    appId: "1:332734652042:web:1d35a5f29a6eaaaa3bd773",
    measurementId: "G-FN4FH7M037"
  };
  
  firebase.initializeApp(firebaseConfig);
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("outputRoomDiv").innerHTML = ""; 
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            roomNames = childKey;
            console.log("Room Names - " + roomNames);
            row = "<div class='roomNames' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
            document.getElementById("outputRoomDiv").innerHTML += row;
        });
    });


}
var userName = localStorage.getItem("userName")
document.getElementById("userName").innerHTML = "Welcome "+ userName;

function addRoom() {
    var roomName = document.getElementById("roomName").value;
    console.log(roomName)
    firebase.database().ref("/").child(roomName).update({
        purpose:"adding room name"
      }) 
    localStorage.setItem("roomName" , roomName);
}
function redirectToRoomName(name) {
    localStorage.setItem("roomName" , name)
    window.location = "kwitterPage.html"
}
function logout() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html"
}