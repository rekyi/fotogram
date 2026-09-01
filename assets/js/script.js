function openDialog(event) {
  const renderImage = event.target.nodeName;

  if (renderImage === "IMG") {
    document.getElementById("dialog-opened").showModal();
  }
}
