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
username = localStorage.getItem("username");
roomname = localStorage.getItem("roomname");


function getData() {firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
          firebase_message_id = childKey;
          message_data = childData;
          //Start Code
          console.log(firebase_message_id);
          console.log(message_data);
         name = message_data['name'];
         message = message_data['name'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name + "<img class='user_tick' src='___exit___.png'></h4>";
         message_with_tag = "<h6 class='message_h6'>"+ message + "</h6>";
         like_button = "<button class='btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;

         function updateLike(message_id)
         {
            console.log("clicked on like button + " + message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            updated_likes = Number(likes) + 1;
            console.log(updated_likes)

            firebase.database().ref(roomname).child(message_id).update({
                like: updated_likes
            });
         }
    
          //End Code
          });
    });
    
    }
    getData();

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomname).push({
        name: username,
        message: msg,
        like: 0
    });
}