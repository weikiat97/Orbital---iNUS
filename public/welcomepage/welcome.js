function openLIForm() {
    document.getElementById("login-wrap").style.display = "block";
  }

  function closeLIForm() {
    document.getElementById("login-wrap").style.display = "none";
  }

 //log in user
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    var childUID = cred.user.uid;
    localStorage.setItem("userid", childUID);
    loginForm.reset();
    window.open("../homepage/home.html", "_self");
  })
  .catch(function(error) {
      window.alert("Wrong email or password! Try again!");
  });
})
