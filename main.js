"use strict";

const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");
const dropdownTrigger = document.querySelectorAll(".dropdown-trigger");
const mobileDropdown = document.querySelector(".mobile-dropdown");
const mobileTrigger = document.querySelectorAll(".dropdown-trigger-mobile");

// Mobile menu interaction
menuIcon.addEventListener("click", () => {
  sideBar.style.display = "block";
  overlay.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  sideBar.style.display = "none";
  overlay.style.display = "none";
});

mobileTrigger.forEach((click) => {
  let isOpen = false;

  const mobileDropdownMenu = click.nextElementSibling;
  const mobileArrow = click.querySelector(".arrow-down");

  function openClose() {
    isOpen = !isOpen;
    mobileDropdownMenu.style.display = isOpen ? "block" : "none";

    if (isOpen) {
      mobileArrow.classList.add("open");
    } else {
      mobileArrow.classList.remove("open");
    }
  }
  click.addEventListener("click", openClose);
});

// Desktop menu interaction

dropdownTrigger.forEach((trigger) => {
  const desktopDropdownMenu = trigger.nextElementSibling;
  const desktopArrow = trigger.querySelector(".arrow-down");

  trigger.addEventListener("mouseenter", () => {
    desktopDropdownMenu.style.display = "block";
    desktopArrow.classList.add("open");
  });

  trigger.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (
        !desktopDropdownMenu.matches(":hover") &&
        !trigger.matches(":hover")
      ) {
        desktopDropdownMenu.style.display = "none";
        desktopArrow.classList.remove("open");
      }
    }, 200);
  });

  desktopDropdownMenu.addEventListener("mouseleave", () => {
    desktopDropdownMenu.style.display = "none";
    desktopArrow.classList.remove("open");
  });

  desktopDropdownMenu.addEventListener("mouseenter", () => {
    desktopDropdownMenu.style.display = "block";
    desktopArrow.classList.add("open");
  });
});
