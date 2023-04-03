"use strict";
// Our Services Tabs

const tabItems = document.querySelectorAll(".tabs-items");
const tabsContent = document.querySelectorAll(".tabs-text");
const tabsImg = document.querySelectorAll(".tabs-img");

tabItems.forEach((element) => {
  element.addEventListener("click", () => {
    let currentBtn = element;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelectorAll(tabId);
    tabItems.forEach(function (item) {
      item.classList.remove("tab-active");
    });
    tabsContent.forEach(function (item) {
      item.classList.add("hidden");
    });

    tabsImg.forEach(function (item) {
      item.classList.add("hidden");
    });

    currentBtn.classList.add("tab-active");
    currentTab.forEach(function (e) {
      e.classList.remove("hidden");
    });
  });
});

// Our Amazing Block Filter + Button

const loadMore = document.querySelector(".filter-tabs-btn");
const forVisibleTabs = document.querySelectorAll(".for-visible");
const allTabs = document.querySelectorAll(".all");
const result = [];
let counter = 13;

loadMore.addEventListener("click", () => {
  forVisibleTabs.forEach((elements) => {
    elements.classList.add("filter-tabs-content");
    result.push(elements);
    return result;
  });
  result.forEach((e) => {
    e.classList.add("content-" + counter++);
  });
});
document
  .querySelector(".main-amazing-tabs-content")
  .addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") return false;
    let filterClass = event.target.dataset["filter"];
    allTabs.forEach((elem) => {
      elem.classList.remove("hidden");
      if (!elem.classList.contains(filterClass)) {
        elem.classList.add("hidden");
      }
    });
  });

loadMore.addEventListener("click", () => {
  loadMore.classList.add("hidden");
});

//Our Amazing Work Focus Tabs

const tabsFocus = document.querySelectorAll(".main-amazing-tabs-items");

tabsFocus.forEach((items) => {
  items.addEventListener("click", () => {
    tabsFocus.forEach((items) => {
      items.classList.remove("amazing-tabs-items-active");
    });
    items.classList.add("amazing-tabs-items-active");
  });
});

// What people say about theHam slider

const nextArrow = document.querySelector(".nextArrow");
const previousArrow = document.querySelector(".previousArrow");
let i;
let n;
const slides = document.getElementsByClassName("people-theham-person");
const dots = document.getElementsByClassName("people-theham-person-small");
const peopleNames = document.getElementsByClassName("people-theham-names");
const peopleText = document.getElementsByClassName("people-theham-text");
const peopleJobTitle = document.getElementsByClassName(
  "people-theham-jobtitle"
);

let slideIndex = 1;
showSlides(slideIndex);
function plusSlide() {
  n = 1;
  showSlides((slideIndex += n));
}

function minusSlide() {
  n = 1;
  showSlides((slideIndex -= n));
}

function currentSlide() {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }

  for (i = 0; i < peopleNames.length; i++) {
    peopleNames[i].classList.add("hidden");
  }

  for (i = 0; i < peopleText.length; i++) {
    peopleText[i].classList.add("hidden");
  }
  for (i = 0; i < peopleJobTitle.length; i++) {
    peopleJobTitle[i].classList.add("hidden");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("people-theham-position");
  }

  slides[slideIndex - 1].classList.remove("hidden");
  dots[slideIndex - 1].classList.add("people-theham-position");
  peopleText[slideIndex - 1].classList.remove("hidden");
  peopleNames[slideIndex - 1].classList.remove("hidden");
  peopleJobTitle[slideIndex - 1].classList.remove("hidden");
}
nextArrow.addEventListener("click", plusSlide);
previousArrow.addEventListener("click", minusSlide);
