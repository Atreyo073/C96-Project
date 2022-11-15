username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";
function add_room()
{
      roomname=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(roomname).update({
            purpose:"Adding RoomName"
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log(Room_names);
redirect_To_Rooms="<div class='room_name' id="+Room_names+"onclick='check(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=redirect_To_Rooms;
//End code
});});}
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
https://kwitter-project-4e8a3-default-rtdb.firebaseio.com/
username=localStorage.getItem("user_name");
roomname=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value ;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}