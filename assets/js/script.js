let currentIndex = 0;

function renderImgs() {
  const contentRef = document.getElementById("photo-grid");
  let htmlContent = "";

  for (let i = 0; i < imageArray.length; i++) {
    htmlContent += imgContent(i);
  }
  contentRef.innerHTML = htmlContent;
}

function imgContent(i) {
  return `<button class="img-btn" data-index="${i}" type="button">
    <img src="${imageArray[i].src}" alt="${imageArray[i].alt}" width="${imageArray[i].width}" height="${imageArray[i].height}"/> </button>`;
}

function updateDialogContent() {
  const dialogImg = document.getElementById("dialog-rendered");

  dialogImg.src = imageArray[currentIndex].src;
  dialogImg.alt = imageArray[currentIndex].alt;
  dialogImg.width = imageArray[currentIndex].width;
  dialogImg.height = imageArray[currentIndex].height;

  document.getElementById("dialog-caption").textContent = imageArray[currentIndex].alt;
  document.getElementById("dialog-counter").textContent = `${currentIndex + 1} / ${imageArray.length} `;
}

function renderDialog(event) {
  const target = event.target.closest("button");

  if (target && target.hasAttribute("data-index")) {
    currentIndex = Number(target.getAttribute("data-index"));
    updateDialogContent();
    document.getElementById("image-dialog").showModal();
  }
}

function changeDialog(step) {
  currentIndex += step;

  if (currentIndex >= imageArray.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imageArray.length - 1;
  }
  updateDialogContent();
}

function onBackdropClick(event) {
  const closeDialogOutside = document.getElementById("image-dialog");

  if (event.target === closeDialogOutside) {
    closeDialogOutside.close();
  }
}

renderImgs();

document.getElementById("photo-grid").addEventListener("click", renderDialog);

document.getElementById("dialog-back").addEventListener("click", function () {
  changeDialog(-1);
});

document.getElementById("dialog-next").addEventListener("click", function () {
  changeDialog(1);
});

document.getElementById("image-dialog").addEventListener("click", onBackdropClick);
