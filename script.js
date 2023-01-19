const passwordBox = document.querySelector(".password-box");
const eyeIconBtn = document.querySelector(".eye-icon");
const closeEyeBtn = document.querySelector(".closeEye-icon");

closeEyeBtn.addEventListener("click", function () {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";
    eyeIconBtn.style.display = "block";
    closeEyeBtn.style.display = "none";
  }
});

eyeIconBtn.addEventListener("click", function () {
  if (passwordBox.type === "text") {
    passwordBox.type = "password";
    eyeIconBtn.style.display = "none";
    closeEyeBtn.style.display = "block";
  }
});
