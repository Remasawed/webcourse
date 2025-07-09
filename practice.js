function toggleShare() {
  const icons = document.getElementById("socialIcons");
  icons.style.display = icons.style.display === "flex" ? "none" : "flex";
  icons.style.flexDirection = "row";
}
