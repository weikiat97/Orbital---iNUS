var userFaculty;
var userDegree;
var database = firebase.database();
console.log(localStorage.getItem("userid"));

function setup() {
  console.log(localStorage.getItem("userid"));
  var ref = database.ref("Users").child(localStorage.getItem("userid"));
  ref.on("value", function(data) {
    //console.log(data.val());
    var val = data.val();
    userFaculty = val.Faculty;
    userDegree = val.Degree;
    makeTable();
  });
}

function makeTable() {
  var ref = database.ref("Degrees");
  console.log(userDegree);
  ref.child(userFaculty).child(userDegree).once('value', function(snapshot){
      if(snapshot.exists()){
          var content = '';
          snapshot.forEach(function(data){
              var val = data.val();
              content +='<tr>';
              content += '<td class="modcode">' + val.ModuleCode + '</td>';
              console.log(val);
              content += '<td>' + val.Description + '</td>';
              content += '<td class="MCs">' + val.MCsUnits + '</td>';
              var completed = "No";
              firebase.database().ref("Users").child(localStorage.getItem("userid"))
                  .child("Overall").once("value", function(snapshot3) {
                      if(snapshot3.exists()) {
                        firebase.database().ref("Users").child(localStorage.getItem("userid"))
                            .child("Overall").child(val.ModuleCode).once("value", function(snapshot2){
                            //window.alert("HERE?");
                            if(snapshot2.exists()) {
                                var val2 = snapshot2.val();
                                if (val2.ActualGrade == "NIL") {
                                    completed = "In Progress";
                                } else {
                                    completed = "Yes";
                                }
                            }
                        });
                      }
                  })

              content += '<td>' + completed +  '</td>';
              content += '</tr>';
          });
          $('#actual-table').append(content);
      }
  });
}

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
