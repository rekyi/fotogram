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
    const imgSrc = imageArray[0].src;
    const imgAlt = imageArray[1].alt;

    // document.getElementById("dialog-rendered").setAttribute("src", imgSrc);
    // document.getElementById("dialog-rendered").setAttribute("alt", imgAlt);

    document.getElementById("dialog-opened").showModal();
  }
}























<img src="assets/images/cat01.webp" alt="Cat and shark having a good time" width="1179" height="1447" />
          <img src="assets/images/cat02.webp" alt="Cat on a swing" width="544" height="386" />
          <img src="assets/images/cat03.webp" alt="Cat dressed as a wizard" width="818" height="808" />
          <img src="assets/images/cat04.webp" alt="Cat in front of the Eiffel Tower" width="600" height="819" />
          <img src="assets/images/cat05.webp" alt="Cat eating pizza by the Leaning Tower of Pisa" width="735" height="726" />
          <img src="assets/images/cat06.webp" alt="Cat typing on a computer" width="496" height="504" />
          <img src="assets/images/cat07.webp" alt="Cat with headphones drinking Coca-Cola" width="736" height="736" />
          <img src="assets/images/cat08.webp" alt="Cat looks grumpy" width="1170" height="909" />
          <img src="assets/images/cat09.webp" alt="Cat at a table" width="443" height="443" />
          <img src="assets/images/cat10.webp" alt="Cat looks frightened" width="773" height="812" />
          <img src="assets/images/cat11.webp" alt="Cat doesn't want to leave" width="1200" height="1200" />
          <img src="assets/images/cat12.webp" alt="Cats as Michelangelo's Creation of Adam" width="736" height="474" />