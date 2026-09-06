const themeSwitch = document.querySelectorAll(".theme-toggle-btn");

function storeTheme() {
  if (document.documentElement.classList.contains("light-mode")) {
    localStorage.setItem("lightMode", "active");
  } else {
    localStorage.removeItem("lightMode");
  }
}

themeSwitch.forEach(function (button) {
  button.addEventListener("click", function () {
    document.documentElement.classList.toggle("light-mode");
    storeTheme();
  });
});
