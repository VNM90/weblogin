$("#logo").click(function() {
  let animationLogo = $("#logo");
  animationLogo.animate({ opacity: "0.2" }, "slow");
  animationLogo.animate({ opacity: "1" }, "slow");
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    let user = firebase.auth().currentUser;

    if (user != null) {
      let email_id = user.email;
      document.getElementById("user_para").innerHTML =
        "Welcome User : " + email_id;
    }
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

function login() {
  let userEmail = document.getElementById("email_field").value;
  let userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      let errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    });
}

document.getElementById("submit").disabled = true;

function agree() {
  if (document.getElementById("agree").checked) {
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("submit").disabled = true;
  }
}

function logout() {
  firebase.auth().signOut();
}
