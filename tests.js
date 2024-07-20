const allSectionsNode = document.querySelectorAll(".section");
const allSectionsArray = [...document.querySelectorAll(".section")];
// Attr
const logo = document.querySelector(".nav__logo");
logo.setAttribute("company", "Bankist");
// console.log(logo.src);
// console.log(logo.getAttribute("src"));
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML Parsed and DOM tree build", e);
});
window.addEventListener("load", function (e) {
  console.log("HTML and CSS loaded", e);
});
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  console.log("Before exit tab", e);
  e.returnValue = "";
  //  e.BeforeUnloadEvent = "";
});
