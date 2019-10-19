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

function calculatey1s1() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y1S1").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y1s1cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y1s1cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculatey1s2() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y1S2").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y1s2cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y1s2cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculatey2s1() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y2S1").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y2s1cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y2s1cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculatey2s2() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y2S2").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y2s2cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y2s2cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculatey3s1() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y3S1").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y3s1cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y3s1cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculatey3s2() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y3S2").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y3s2cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y3s2cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculatey4s1() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y4S1").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y4s1cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y4s1cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculatey4s2() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y4S2").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
            document.getElementById("y4s2cap").innerHTML = "Semester CAP:   NIL";
        } else {
          document.getElementById("y4s2cap").innerHTML = "Semester CAP:   " + output;
        }
    });
}

function calculateOverall() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Overall").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade == 'A+' || grade == 'A') {
                  var intermediate = 5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'A-') {
                  var intermediate = 4.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B+') {
                  var intermediate = 4.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B') {
                  var intermediate = 3.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'B-') {
                  var intermediate = 3.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C+') {
                  var intermediate = 2.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'C') {
                  var intermediate = 2.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D+') {
                  var intermediate = 1.5 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'D') {
                  var intermediate = 1.0 * Number(mc);
                  totalGrades += intermediate;
                  totalMC += Number(mc);
                } else if (grade == 'F') {
                  totalGrades += 0;
                  totalMC += mc;
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
          document.getElementById("currentcap").innerHTML = "Current CAP:   NIL";
        } else {
          document.getElementById("currentcap").innerHTML = "Current CAP:   " + output;
        }
    });
}


function calculateProgress() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Overall").once('value', function(snapshot){
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.ActualGrade;
                var mc = val.MCsUnits;
                if (grade !== 'NIL' && grade !== 'U') {
                    totalMC += Number(mc);
                }
            });
        }
        var final = 100 * (totalMC / 160);
        var output = final.toFixed(2);
        document.getElementById("overall-progress").innerHTML = "Overall Academic Progress: " + output + "%";
    });
}
