"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
// Cookie message
const message = document.createElement("div");
message.classList.add("cookie-message");
message.style.backgroundColor = "#37383d";
message.innerHTML =
  "We use cookies for improvmend functionality and analytics.<button class='btn btn--close-cookie'>Got it!</button>";
footer.append(message);
document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  setTimeout(() => {
    message.remove();
  }, 500);
});
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";
// Smooth scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
btnScrollTo.addEventListener("click", (e) => {
  section1.scrollIntoView({ behavior: "smooth" });
});
// Event delegation!!!
// 1. Add event listener to common parent element
// 2. Determine what element orginated th event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
