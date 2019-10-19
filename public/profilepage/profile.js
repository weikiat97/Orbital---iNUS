  //log out
const logout = document.querySelector('#logout-photo');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
      window.alert("Logout successful!");
      console.log('user signed out');
      window.open("../welcomepage/welcome.html", "_self");
  })
});

/*$(document).ready(function() {


  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
              $('.profile-pic').attr('src', e.target.result);
          }

          reader.readAsDataURL(input.files[0]);
      }
  }


  $(".file-upload").on('change', function(){
      readURL(this);
  });

  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
});*/

//let selectedFile;
//let userUID;
 /* here */
 /*
firebase.auth().onAuthStateChanged( user => {
    if (user) { userUID = user.uid }
  });

document.querySelector('.file-select').addEventListener('change', (e) => {
    selectedFile = e.target.files[0];
});

document.querySelector('.file-submit').addEventListener('click', () => {
    const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
    uploadTask.on('state_changed', (snapshot) => {
        // Observe state change events such as progress, pause, and resume
    }, (error) => {
        // Handle unsuccessful uploads
        window.alert('File upload failed. Please try again');
    }, () => {
        // Do something once upload is complete
        window.alert('File uploaded successfully');
    }).then(writeURL())


})


function writeURL() {
    var database = firebase.database();
    var ref = database.ref('Users');
    var help = storageRef.child(`images/${selectedFile.name}`);
    var image = help.getDownloadURL();

    //localStorage.setItem()
    ref.child(localStorage.getItem("userid")).child("imageURL").set( data = {
        imageURL: image
    });
    //localStorage.setItem("userid", userRef.key);
}

document.getElementById('profile-pic').addEventListener('load', () => {
    var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
        .child("imageURL");

    document.getElementById('profile-pic').src = ref;
})
*/
/*till here*/

function putValues() {
    firebase.database().ref("Users").child(localStorage.getItem("userid")).on("value", function(snapshot) {
      var val = snapshot.val();
      console.log(val);
      document.getElementById("name").innerHTML = val.First_Name + " " + val.Last_Name;
      document.getElementById("courseOfStudy").innerHTML = val.Degree;
      document.getElementById('fac').innerHTML = val.Faculty;
      var value = val.YearAndSemester;
      if (value == "y1s1") {
          document.getElementById('yearOfStudy').innerHTML = "Year 1 Semester 1";
      } else if (value == "y1s2") {
        document.getElementById('yearOfStudy').innerHTML = "Year 1 Semester 2";
      } else if (value == "y2s1") {
        document.getElementById('yearOfStudy').innerHTML = "Year 2 Semester 1";
      } else if (value == "y2s2") {
        document.getElementById('yearOfStudy').innerHTML = "Year 2 Semester 2";
      } else if (value == "y3s1") {
        document.getElementById('yearOfStudy').innerHTML = "Year 3 Semester 1";
      } else if (value == "y3s2") {
        document.getElementById('yearOfStudy').innerHTML = "Year 3 Semester 2";
      } else if (value == "y4s1") {
        document.getElementById('yearOfStudy').innerHTML = "Year 4 Semester 1";
      } else if (value == "y4s2") {
        document.getElementById('yearOfStudy').innerHTML = "Year 4 Semester 2";
      }
    });
}

var ref = firebase.database();
var facultyField;
var degreeField;
var fassCourse = ["Chinese Language", "Chinese Studies", "Communications & New Media",
    "Economics", "English Language", "English Literature", "Environmental Studies in Geography",
    "European Studies", "Geography", "Global Studies", "History", "Japanese Studies",
    "Malay Studies", "Philosophy", "Political Science", "Psychology", "Social Work",
    "Sociology", "South Asian Studies", "Southeast Asian Studies", "Theatre Studies"];
var bizCourse = ["Business Administration", "Business Administration (Accountancy)"];
var compCourse = ["Business Analytics", "Computer Engineering", "Computer Science",
    "Information Security", "Information Systems"];
var dentistryCourse = ["Dentistry"];
var sdeCourse = ["Architecture", "Industrial Design", "Project & Facilities Management",
    "Real Estate"];
var enginCourse = ["Biomedical Engineering", "Chemical Engineering", "Civil Engineering",
    "Computer Engineer", "Electrical Engineering", "Engineering", "Engineering Science",
    "Environmental Engineering", "Industrial and Systems Engineering",
    "Material Science & Engineering", "Mechanical Engineering"];
var lawCourse = ["Graduate LLB Programme", "Undergraduate Law Programme"];
var medCourse = ["Medicine"];
var musicCourse = ["Music"];
var nursingCourse = ["Nursing"];
var scienceCourse = ["Applied Mathematics",
    "Applied Mathematics with specialisation in Mathematical Modelling and Data Analytics",
    "Applied Mathematics with specialisation in Operations Research and Financial Mathematics",
    "Chemistry", "Chemistry (with specialisation in Environment and Energy)",
    "Chemistry (with specialisation in Materials Chemistry)",
    "Chemistry (with specialisation in Medicinal Chemistry)",
    "Computational Biology", "Data Science and Analytics", "Environmental Studies in Biology",
    "Food Science and Technology", "Life Sciences",
    "Life Sciences (with specialisation in Biomedical Science)",
    "Life Sciences (with specialisation in Environmental Biology)",
    "Life Sciences (with specialisation in Molecular & Cell Biology)",
    "Mathematics", "Pharmaceutical Science", "Pharmacy", "Physics",
    "Physics (with specialisation in Astrophysics)",
    "Physics (with specialisation in Nanophysics)",
    "Phsyics (with specialisation in Quantum Technologies)",
    "Quantitative Finance", "Statistics", "Statistics (with specialisation in Data Science)",
    "Statistics (with specialisation in Finance and Business Statistics)"];

var aItems;
var select2 = document.getElementById("degree");
document.getElementById("faculty2").addEventListener("change", function(e){
    //var select2 = document.getElementById("degree");
    select2.innerHTML = "";
    aItems = [];
    if(this.value == "fass"){
        facultyField = "Arts and Social Sciences";
        aItems = fassCourse;
    } else if (this.value == "biz") {
        facultyField = "Business & Accountancy"
        aItems = bizCourse;
    } else if(this.value == "comp") {
        facultyField = "Computing";
        aItems = compCourse;
    } else if(this.value == "dentistry") {
        facultyField = "Dentistry";
        aItems = dentistryCourse;
    } else if(this.value == "sde") {
        facultyField = "Design & Environment";
        aItems = sdeCourse;
    } else if(this.value == "engin") {
        facultyField = "Engineering";
        aItems = enginCourse;
    } else if(this.value == "law") {
        facultyField = "Law";
        aItems = lawCourse;
    } else if(this.value == "med") {
        facultyField = "Medicine";
        aItems = medCourse;
    } else if(this.value == "music") {
        facultyField = "Music";
        aItems = musicCourse;
    } else if(this.value == "nursing") {
        facultyField = "Nursing";
        aItems = nursingCourse;
    } else if(this.value == "science") {
        facultyField = "Science";
        aItems = scienceCourse;
    }

    for(var i=0,len=aItems.length; i<len;i++) {
        var option = document.createElement("option");
        option.value= (i+1);
        var textNode = document.createTextNode(aItems[i]);
        option.appendChild(textNode);
        select2.appendChild(option);
    }

}, false);

const courseForm = document.querySelector('#course-form');
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    degreeField = aItems[degree.value - 1];
    ref.ref("Users").child(localStorage.getItem("userid")).child("Faculty").set(facultyField);
    ref.ref("Users").child(localStorage.getItem("userid")).child("Degree").set(degreeField);
    window.alert("Course successfully changed!");
});

const yearForm = document.querySelector('#year-form');
yearForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var newYear = document.getElementById("year");
    ref.ref("Users").child(localStorage.getItem("userid")).child("YearAndSemester").set(newYear.value);
    window.alert("Semester of Study successfully changed!");
});



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
