const currentDate = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentDate;

setTimeout(() => {
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");
  main.style.opacity = 1;
  footer.style.opacity = 1;
  main.style.filter = "blur(0px)";
  footer.style.filter = "blur(0px)";
}, 500);
