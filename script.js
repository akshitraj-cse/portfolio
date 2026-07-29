/* =============================================================
   AKSHIT PORTFOLIO — SCRIPT
   This one file is shared by every page. It only does two things:
   1. Opens/closes the mobile menu when the hamburger is tapped
   2. Prints the current year in the footer
   ============================================================= */

// Wait until the page has fully loaded before running anything
document.addEventListener('DOMContentLoaded', function () {

  /* ---- 1. Mobile hamburger menu ---- */
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Close the menu automatically when a link is tapped
  var links = navMenu.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  /* ---- 2. Footer year ---- */
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });
  if (response.ok) {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "❌ Oops! Something went wrong.";
  }
});
