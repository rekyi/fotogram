let imageArray = [
  {
    src: "assets/images/cat01.webp",
    alt: "Cat and shark having a good time",
    width: 1179,
    height: 1447,
  },
  {
    src: "assets/images/cat02.webp",
    alt: "Cat on a swing",
    width: 800,
    height: 568,
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
    alt: "Cat eating pizza by the Leaning Tower of Pisa",
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
    alt: "Cat with headphones drinking Coca-Cola",
    width: 736,
    height: 736,
  },
  {
    src: "assets/images/cat08.webp",
    alt: "Cat looks grumpy",
    width: 1170,
    height: 909,
  },
  {
    src: "assets/images/cat09.webp",
    alt: "Cat at a table",
    width: 800,
    height: 568,
  },
  {
    src: "assets/images/cat10.webp",
    alt: "Cat looks frightened",
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
    alt: "Cats as Michelangelo's Creation of Adam",
    width: 736,
    height: 474,
  },
];

function render() {
  let contentRef = document.getElementById("open-dialog");
  for (let i = 0; i < imageArray.length; i++) {
    contentRef.innerHTML += imgContent(i);
  }
}

function imgContent(i) {
  return `<img data-index="${i}" src="${imageArray[i].src}" alt="${imageArray[i].alt}" width="${imageArray[i].width}" height="${imageArray[i].height}" />`;
}

function renderDialog(event) {
  const renderDialogContent = event.target.nodeName;
  const i = event.target.dataset.index;

  if (renderDialogContent === "IMG") {
    const dialogImg = document.getElementById("dialog-rendered");

    dialogImg.src = imageArray[i].src;
    dialogImg.alt = imageArray[i].alt;
    dialogImg.width = imageArray[i].width;
    dialogImg.height = imageArray[i].height;
    document.getElementById("dialog-caption").textContent = imageArray[i].alt;

    document.getElementById("dialog-opened").showModal();
  }
}

function onBackdropClick(event) {
  const closeDialogOutside = document.getElementById("dialog-opened");

  if (event.target === closeDialogOutside) {
    closeDialogOutside.close();
  }
}

render();
