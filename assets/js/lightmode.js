let lightMode = localStorage.getItem("lightMode");
const themeSwitch = document.querySelectorAll(".theme-toggle-btn");

function storeTheme() {
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("lightMode", "active");
  } else {
    localStorage.removeItem("lightMode");
  }
}

function loadTheme() {
  if (lightMode === "active") {
    document.body.classList.add("light-mode");
    themeSwitch.forEach(function (localSync) {
      localSync.classList.add("active");
    });
  }
}

themeSwitch.forEach(function (button) {
  button.addEventListener("click", function () {
    themeSwitch.forEach(function (syncButtons) {
      syncButtons.classList.toggle("active");
    });
    document.body.classList.toggle("light-mode");
    storeTheme();
  });
});
loadTheme();
