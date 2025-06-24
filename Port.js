function toggleMode() {
  const hmtl = document.documentElement;
  hmtl.classList.toggle("light");

  const img = document.querySelector(".profile-photo");

  if (hmtl.classList.contains("light")) {
    img.setAttribute("src", "./img/avatar2.jpeg");
  } else {
    img.setAttribute("src", "./img/avatar1.jpeg");
  }
}
