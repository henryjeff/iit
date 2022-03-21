$(document).ready(function() {
  const userIdDOM = document.getElementById("userId");
  userIdDOM.focus();

  // get query params
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const password = params.get("password");

  if(userId && password) {
    if(userId !== "" && password !== "") {
      const valid = validate(userId, password);
      if(valid) {
        // delete formData id from html
        $("#loginForm").remove();
      }
    }
  }
});

function validate(userId, password) {
  if (userId !== "heffeh") {
    $("#loginAlertText").text("Invalid userId").css("color", "#f56969");
    return false;
  }

  if (password !== "password") {
    $("#loginAlertText").text("Invalid password").css("color", "#f56969");
    return false;
  }

  $("#loginAlertText").text("SUCCESSFULLY LOGGED IN!").css("color", "#a0f0a0");
  return true;
}

