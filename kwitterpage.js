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
var userName= localStorage.getItem("userName")
var roomName= localStorage.getItem("roomName")

function send() {
      var message = document.getElementById("message").value;
      firebase.database().ref(roomName).push({
            name:userName,
            message:message,
            like:0
      }) 
}


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
