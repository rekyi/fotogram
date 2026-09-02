let imageArray = [
  {
    src: "assets/images/cat01.webp",
    alt: "Cat and shark having a good time",
  },
  {
    src: "assets/images/cat02.webp",
    alt: "Cat on a swing",
  },
  {
    src: "assets/images/cat03.webp",
    alt: "Cat dressed as a wizard",
  },
  {
    src: "assets/images/cat04.webp",
    alt: "Cat in front of the Eiffel Tower",
  },
  {
    src: "assets/images/cat05.webp",
    alt: "Cat eating pizza by the Leaning Tower of Pisa",
  },
  {
    src: "assets/images/cat06.webp",
    alt: "Cat typing on a computer",
  },
  {
    src: "assets/images/cat07.webp",
    alt: "Cat with headphones drinking Coca-Cola",
  },
  {
    src: "assets/images/cat08.webp",
    alt: "Cat looks grumpy",
  },
  {
    src: "assets/images/cat09.webp",
    alt: "Cat at a table",
  },
  {
    src: "assets/images/cat10.webp",
    alt: "Cat looks frightened",
  },
  {
    src: "assets/images/cat11.webp",
    alt: "Cat doesn't want to leave",
  },
  {
    src: "assets/images/cat12.webp",
    alt: "Cats as Michelangelo's Creation of Adam",
  },
];

function openDialog(event) {
  const showDialog = event.target.nodeName;

  if (showDialog === "IMG") {
    const imgSrc = event.target.getAttribute("src");
    const imgAlt = event.target.getAttribute("alt");

    document.getElementById("dialog-rendered").setAttribute("src", imgSrc);
    document.getElementById("dialog-rendered").setAttribute("alt", imgAlt);

    document.getElementById("dialog-opened").showModal();
  }
}

("");
