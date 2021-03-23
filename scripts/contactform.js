$(document).ready(function () {
  $("input:submit").click(function () {
    email = document.getElementById("email").value;
    fname = document.getElementById("fname").value;
    request = document.getElementById("request").value;
    if (email == "" || fname == "" || request == "") {
      alert(
        "You are missing one or more required fields. Please make sure you have filled all fields in."
      );
    } else {
      alert(
        "Thank you for submitting a question/comment! A member of our team will get back to you within three business days."
      );
    }
  });
});
