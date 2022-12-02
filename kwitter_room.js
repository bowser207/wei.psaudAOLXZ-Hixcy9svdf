
var firebaseConfig = {
      apiKey: "AIzaSyC3-S-ifzBwkPBihR3WCVCDvpCb6eAd2bQ",
      authDomain: "kwitterhtmlmain-kia.firebaseapp.com",
      databaseURL: "https://kwitterhtmlmain-kia-default-rtdb.firebaseio.com",
      projectId: "kwitterhtmlmain-kia",
      storageBucket: "kwitterhtmlmain-kia.appspot.com",
      messagingSenderId: "401824493989",
      appId: "1:401824493989:web:8ebf4466c758400a30384c"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("username");
    document.getElementById("username").innerHTML = "♩Welcome " + user_name + "!♩"

    function addRoom()
    {
       room_name = document.getElementById("roomname").value;
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name to input"
       });
       localStorage.setItem("roomname", room_name);

     window.location = "kwitter_page.html"  
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      //Start Code
      Room_names = childKey;
      console.log("Room Name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick= 'redirectToRoomName(this.id)' >#"+
      Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;

      //End Code
      });
});

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("roomname", name);
        window.location = "kwitter_page.html";
}

function logOut()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
