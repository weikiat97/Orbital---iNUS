//log out
const logout = document.querySelector('#logout-photo');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    window.alert("Logout successful!");
      console.log('user signed out');
      window.open("../welcomepage/welcome.html", "_self");
  })
})

//check which link to go to
function doClick() {
    firebase.database().ref("Users").child(localStorage.getItem("userid")).child("YearAndSemester").once('value', function(snapshot){
        var study = snapshot.val();
        if (study == "y1s1") {
            window.location.href = "../y1s1page/year1sem1.html";
        } else if (study == "y1s2") {
            window.location.href = "../y1s2page/year1sem2.html";
        } else if (study == "y2s1") {
            window.location.href = "../y2s1page/year2sem1.html";
        } else if (study == "y2s2") {
            window.location.href = "../y2s2page/year2sem2.html";
        } else if (study == "y3s1") {
            window.location.href = "../y3s1page/year3sem1.html";
        } else if (study == "y3s2") {
            window.location.href = "../y3s2page/year3sem2.html";
        } else if (study == "y4s1") {
            window.location.href = "../y4s1page/year4sem1.html";
        } else if (study == "y4s2") {
            window.location.href = "../y4s2page/year4sem2.html";
        }
    });
}

$( document ).ready(function() {
  $("#uploadButton").hide();
  $(".uploadGroup").hide();
  document.getElementById("upload").addEventListener("change", handleFileSelect, false);
})

$("#file").on("change", function(event) {
  selectedFile = event.target.files[0];
  //$("#uploadButton").show();
});

function uploadFile() {
    var filename = selectedFile.name;
    var storageRef = firebase.storage().ref('/Study Plans/' + filename);
    var uploadTask = storageRef.put(selectedFile);

    uploadTask.on("state_changed", function(snapshot){

    }, function(error) {

    }, function() {
        var downloadURL = uploadTask.snapshot.downloadURL;
        console.log(downloadURL);
    });
}
