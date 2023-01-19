const passwordBox = document.querySelector(".password-box");
const openEyeBtn = document.querySelector(".eye-icon");
const closeEyeBtn = document.querySelector(".closeEye-icon");

openEyeBtn.addEventListener("click", function () {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";
    openEyeBtn.style.display = "none";
    closeEyeBtn.style.display = "block";
  }
});

closeEyeBtn.addEventListener("click", function () {
  if (passwordBox.type === "text") {
    passwordBox.type = "password";
    openEyeBtn.style.display = "block";
    closeEyeBtn.style.display = "none";
  }
});
