let themeSwitch = document.querySelectorAll(".theme-toggle-btn");
themeSwitch.forEach(function (button) {
  button.addEventListener("click", function () {
    themeSwitch.forEach(function (syncButtons) {
      syncButtons.classList.toggle("active");
    });
    document.body.classList.toggle("light-mode");
  });
});
