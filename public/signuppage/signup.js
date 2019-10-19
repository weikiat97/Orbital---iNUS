firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("LOGGED IN");
  } else {
    console.log("NOT LOGGED IN");
  }
});

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
document.getElementById("faculty").addEventListener("change", function(e){
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

var childUID;

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const firstName = signupForm['firstName'].value;
    const lastName = signupForm['lastName'].value;
    const email= signupForm['emailAd'].value;
    const password= signupForm['password'].value;
    const year = signupForm['year'].value;

    console.log(email, password);
    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
      childUID = cred.user.uid;
      localStorage.setItem("userid", childUID);
      writeProfile();
      signupForm.reset();
      //makes the signup box disappear, but should ideally move to another page
      document.getElementById("signup-wrap").style.display = "none";

      //makes the website jump to another page
      window.open("../homepage/home.html", "_self");
    })
    .catch(function(error) {
        window.alert("Email already in use. Try another email!");
    });
});

function writeProfile() {

  var database = firebase.database();
  var ref = database.ref('Users');

  var first = firstName.value;
  var last = lastName.value;
  var email = emailAd.value;
  var pw = password.value;
  var year2 = year.value;
  var degreeField = aItems[degree.value - 1];

  var data = {
    First_Name: first,
    Last_Name: last,
    YearAndSemester: year2,
    Email: email,
    Password1: pw,
    Faculty: facultyField,
    Degree: degreeField
  }
  //localStorage.setItem()
  var userRef = ref.child(childUID).set(data);
  //localStorage.setItem("userid", userRef.key);
}
