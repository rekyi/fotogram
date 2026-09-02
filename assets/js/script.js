let imageArray = ["cat01.webp", "cat02.webp", "cat03.webp", "cat04.webp", "cat05.webp", "cat06.webp", "cat07.webp", "cat08.webp", "cat09.webp", "cat10.webp", "cat11.webp", "cat12.webp", "cat13.webp"];

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
