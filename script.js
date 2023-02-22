const passwordBox = document.querySelector(".password-box");
const openEyeBtn = document.querySelector(".eye-icon");
const closeEyeBtn = document.querySelector(".closeEye-icon");

openEyeBtn.addEventListener("click", function () {
  if (passwordBox.type === "text") {
    passwordBox.type = "password";
    closeEyeBtn.style.visibility = "visible";
    openEyeBtn.style.visibility = "hidden";
  }
});

closeEyeBtn.addEventListener("click", function () {
  if (passwordBox.type === "password") {
    passwordBox.type = "text";
    openEyeBtn.style.visibility = "visible";
    closeEyeBtn.style.visibility = "hidden";
  }
});

passwordBox.addEventListener("keyup", function () {
  console.log(passwordBox.value);
  if (passwordBox.value === "") {
    closeEyeBtn.style.display = "none";
    openEyeBtn.style.display = "none";
  } else {
    closeEyeBtn.style.display = "block";
    openEyeBtn.style.display = "block";
  }
});
