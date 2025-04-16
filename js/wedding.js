// Get that hamburger menu cookin' //

document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});

// Preloader
$(document).ready(function($) {
  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});


function checkScrollPosition() {
  const btn = document.getElementById("menuToggle");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
}

// Check on scroll
window.onscroll = checkScrollPosition;

// Check on load
window.onload = checkScrollPosition;

const toggleBtn = document.getElementById("menuToggle");
const menu = document.getElementById("floatingMenu");

toggleBtn.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Hide the menu when a link is clicked
document.querySelectorAll("#floatingMenu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.style.display = "none";
  });
});