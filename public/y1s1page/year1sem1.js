firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("LOGGED IN");
    console.log(user.uid);
  } else {
    console.log("NOT LOGGED IN");
  }
});

function setup(mod) {
  var url = "https://api.nusmods.com/v2/2019-2020/modules/" + mod + ".json";
  return fetch(url)
      .then(res => res.json())
      .then(function(data) {
        var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
            .child("Y1S1").child(mod)
        var ref2 = firebase.database().ref("Users").child(localStorage.getItem("userid"))
            .child("Overall").child(mod)
        ref.child("Description").set(data.title);
        ref.child("MCsUnits").set(data.moduleCredit);
        ref2.child("Description").set(data.title);
        ref2.child("MCsUnits").set(data.moduleCredit);
        if(data.semesterData[0].examDate != undefined) {
          ref.child("ExamDate").set(data.semesterData[0].examDate);
          ref2.child("ExamDate").set(data.semesterData[0].examDate);
        } else {
          ref.child("ExamDate").set("No Exam!");
          ref2.child("ExamDate").set(data.semesterData[0].examDate);
        }
      })
      .then(posts => console.log(posts))
}



function makeTable() {
  var database = firebase.database();
  database.ref("Users").child(localStorage.getItem("userid")).child("Y1S1").once('value', function(snapshot){
      if(snapshot.exists()){
          var content = '';
          snapshot.forEach(function(data){
              var val = data.val();
              content +='<tr>';
              content += '<td class="modcode">' + val.ModuleCode + '</td>';
              content += '<td class="moddesc">' + val.Description + '</td>';
              content += '<td class="modMC">' + val.MCsUnits + '</td>';
              content += '<td class="pg">' + val.PredictedGrade + '</td>';
              content += '<td class="ag">' + val.ActualGrade + '</td>';
              content += '</tr>';
          });
          $('#actual-table').append(content);
      }
  });
}

function calculatePredicted() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Y1S1").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.PredictedGrade;
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
                  totalMC += Number(mc);
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
          document.getElementById("outputPredicted").innerHTML = "Semester Predicted CAP: NIL";
        } else {
          document.getElementById("outputPredicted").innerHTML = "Semester Predicted CAP: " + output;
        }
    });
}

function calculatePredictedOverall() {
    var database = firebase.database();
    database.ref("Users").child(localStorage.getItem("userid")).child("Overall").once('value', function(snapshot){
      var totalGrades = 0;
      var totalMC = 0;
        if(snapshot.exists()){
            snapshot.forEach(function(data){
                var val = data.val();
                var grade = val.PredictedGrade;
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
                  totalMC += Number(mc);
                }
            });
        }
        var final = totalGrades / totalMC;
        var output = final.toFixed(2);
        if (isNaN(output)) {
          document.getElementById("outputPredictedOverall").innerHTML = "Overall Predicted CAP: NIL";
        } else {
          document.getElementById("outputPredictedOverall").innerHTML = "Overall Predicted CAP: " + output;
        }
    });
}

function calculateActual() {
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
          document.getElementById("outputActual").innerHTML = "Semester Actual CAP: NIL";
        } else {
          document.getElementById("outputActual").innerHTML = "Semester Actual CAP: " + output;
        }
    });
}

function calculateActualOverall() {
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
          document.getElementById("outputActualOverall").innerHTML = "Overall Actual CAP: NIL";
        } else {
          document.getElementById("outputActualOverall").innerHTML = "Overall Actual CAP: " + output;
        }
    });
}

function changePredictedGrades() {
    document.getElementById("predicted-wrap").style.display = "block";
}

function addActualGrades() {
    document.getElementById("actual-wrap").style.display = "block";
}

function addModules() {
    document.getElementById("add-wrap").style.display = "block";
}

function removeModules() {
    document.getElementById("remove-wrap").style.display = "block";
}

function closeForm() {
    //document.form.submit();
    //window.close();
    window.open("year1sem1.html", "_self");
}

//Changing Predicted Grades
const predictedGradeForm = document.querySelector('#predictedGrade-form');
predictedGradeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const mod = predictedGradeForm['predictedModule'].value;
  const grade = predictedGradeForm['predictedGrade'].value;

  var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Y1S1").child(mod).child("PredictedGrade");
  var ref2 = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Overall").child(mod).child("PredictedGrade")
  ref.once('value', function(snapshot){
      if(snapshot.exists()){
          ref.set(grade);
          ref2.set(grade);
          window.open("year1sem1.html", "_self");
      } else {
        window.alert("Module not found! Please try again.");
      }
    })
})

//Adding Actual Grades
const actualGradeForm = document.querySelector('#actualGrade-form');
actualGradeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const mod = actualGradeForm['actualModule'].value;
  const grade = actualGradeForm['actualGrade'].value;

  var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Y1S1").child(mod).child("ActualGrade");
  var ref2 = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Overall").child(mod).child("ActualGrade");
  ref.once('value', function(snapshot){
      if(snapshot.exists()){
          ref.set(grade);
          ref2.set(grade)
          window.open("year1sem1.html", "_self");
      } else {
        window.alert("Module not found! Please try again.");
      }
    })
})

//Adding Module
const addForm = document.querySelector('#add-form');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const mod = addForm['addModule'].value;
  var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Y1S1").child(mod);
  var ref2 = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Overall").child(mod);
  var data = {
      ModuleCode : mod,
      Description : "placeholder",
      MCsUnits : "placeholder",
      PredictedGrade : "NIL",
      ActualGrade: "NIL",
      ExamDate: "placeholder"

  }
  var url = "https://api.nusmods.com/v2/2019-2020/modules/" + mod + ".json";
  fetch(url)
    .then(function(response) {
      if (!response.ok) {
        window.alert("No such module! Please try again.");
      } else {
        ref.set(data);
        ref2.set(data)
        setup(mod);
        window.open("year1sem1.html", "_self");
      }
    })
})

//Remove Module
const removeForm = document.querySelector('#remove-form');
removeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const mod = removeForm['removeModule'].value;

  var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Y1S1").child(mod);
  var ref2 = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Overall").child(mod);

  ref.once('value', function(snapshot){
      if(snapshot.exists()){
          ref.remove();
          ref2.remove();
          window.open("year1sem1.html", "_self");
      } else {
        window.alert("Module not found! Please try again.");
      }
    })
})


const logout = document.querySelector('#logout-photo');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
      window.alert("Logout successful!");
      console.log('user signed out');
      window.open("../index.html", "_self");
  })
})

//check which link to go to
function doClick() {
    ref.ref("Users").child(localStorage.getItem("userid")).child("YearAndSemester").once('value', function(snapshot){
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
