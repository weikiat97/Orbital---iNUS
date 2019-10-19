var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("indiv-pic");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

// open add event

function openEventForm() {
  document.getElementById("add-wrap").style.display = "block";
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

//saving data
const eventForm = document.querySelector('#event-form');
eventForm.addEventListener('submit', (e) => {
  e.preventDefault();

  var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Countdown");
  console.log(localStorage.getItem("userid"));

  var data = {
    location: document.getElementById("location").value,
    title: document.getElementById("title").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    remarks: document.getElementById("remarks").value
  }

  var header = document.getElementById("title").value;

  ref.child(header).set(data);
  makeCountdown();
})

//Remove Module
const removeForm = document.querySelector('#remove-form');
removeForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  var ref = firebase.database().ref("Users").child(localStorage.getItem("userid"))
      .child("Countdown");

  ref.once('value', function(snapshot){
      if(snapshot.exists()){
          ref.remove();
          window.open("homepage.html", "_self");
      } else {
        window.alert("Event not found! Please try again.");
      }
    })
})


function makeCountdown() {
  var database = firebase.database();
  database.ref("Users").child(localStorage.getItem("userid")).child("Countdown").once('value', function(snapshot){
      if(snapshot.exists()){
          num = 1;
          //what = 3;
          snapshot.forEach(function(data){
            if (num > 12) {
              document.getElementById("warning").style.display = "block";
              document.getElementById("add-wrap").style.display = "none";
            }

            //what = what + 1;
            var val = data.val();
            console.log(data.val());
            var location = val.location;
            var title = val.title;
            var date = val.date;
            var time = val.time;
            var remarks = val.remarks;
            console.log(location);

            document.getElementById(num.toString() + " title-message").innerHTML = title;
            document.getElementById(num.toString() + " location-message").innerHTML = "Location: " + location;
            document.getElementById(num.toString() + " time-message").innerHTML = "Timing: " + time;
            document.getElementById(num.toString() + " remarks-message").innerHTML = "Remarks: " + remarks;

            document.getElementById("add-wrap").style.display = "none";

            today = new Date();
            BigDay = new Date(date);
            msPerDay = 24 * 60 * 60 * 1000;
            timeLeft = (BigDay.getTime() - today.getTime());
            e_daysLeft = timeLeft / msPerDay;
            daysLeft = Math.floor(e_daysLeft);
            e_hrsLeft = (e_daysLeft - daysLeft) * 24;
            hrsLeft = Math.floor(e_hrsLeft);
            minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);

            document.getElementById(num.toString()).innerHTML = daysLeft + " days ";

            var wrapper;
            if (num == 1) {
              wrapper = "first-wrap";
            } else if (num == 2) {
              wrapper = "second-wrap";
            } else if (num == 3) {
              wrapper = "third-wrap";
            } else if (num == 4) {
              wrapper = "fourth-wrap";
            } else if (num == 5) {
              wrapper = "fifth-wrap";
            } else if (num == 6) {
              wrapper = "sixth-wrap";
            } else if (num == 7) {
              wrapper = "seventh-wrap";
            } else if (num == 8) {
              wrapper = "eight-wrap";
            } else if (num == 9) {
              wrapper = "ninth-wrap";
            } else if (num == 10) {
              wrapper = "tenth-wrap";
            } else if (num == 11) {
              wrapper = "eleventh-wrap";
            } else if (num == 12) {
              wrapper = "twelve-wrap";
            }

            document.getElementById(wrapper).style.display = "block";
            num = num + 1;
          });
      }
  });
}


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
