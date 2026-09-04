const imageArray = [
  {
    src: "assets/images/cat01.webp",
    alt: "Cat and shark having a good time",
    width: 1179,
    height: 1447,
  },
  {
    src: "assets/images/cat02.webp",
    alt: "Cat on a scale",
    width: 818,
    height: 1024,
  },
  {
    src: "assets/images/cat03.webp",
    alt: "Cat dressed as a wizard",
    width: 818,
    height: 808,
  },
  {
    src: "assets/images/cat04.webp",
    alt: "Cat in front of the Eiffel Tower",
    width: 600,
    height: 819,
  },
  {
    src: "assets/images/cat05.webp",
    alt: "Cat eating pizza at Pisa Tower",
    width: 735,
    height: 726,
  },
  {
    src: "assets/images/cat06.webp",
    alt: "Cat typing on a computer",
    width: 800,
    height: 568,
  },
  {
    src: "assets/images/cat07.webp",
    alt: "Cat is drinking Coca-Cola",
    width: 736,
    height: 736,
  },
  {
    src: "assets/images/cat08.webp",
    alt: "Cat with pancake",
    width: 840,
    height: 917,
  },
  {
    src: "assets/images/cat09.webp",
    alt: "Cat at a table",
    width: 800,
    height: 568,
  },
  {
    src: "assets/images/cat10.webp",
    alt: "Cat looking shocked",
    width: 773,
    height: 812,
  },
  {
    src: "assets/images/cat11.webp",
    alt: "Cat doesn't want to leave",
    width: 1200,
    height: 1200,
  },
  {
    src: "assets/images/cat12.webp",
    alt: "Cat holds other cat hostage",
    width: 720,
    height: 691,
  },
];

let currentIndex = 0;

function renderImgs() {
  const contentRef = document.getElementById("open-dialog");
  contentRef.innerHTML = "";

  for (let i = 0; i < imageArray.length; i++) {
    contentRef.innerHTML += imgContent(i);
  }
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
    document.getElementById("dialog-opened").showModal();
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
  const closeDialogOutside = document.getElementById("dialog-opened");

  if (event.target === closeDialogOutside) {
    closeDialogOutside.close();
  }
}

renderImgs();
document.getElementById("open-dialog").addEventListener("click", renderDialog);
