let text1 = document.getElementById("text");
let text2 = document.querySelector(".stroke");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("div nav li a");

// Lenis Smooth Scroll

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Parallax effect

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text1.style.marginTop = value * 2.5 + "px";
  if (value > 330) {
    text1.style.display = "none";
    text2.style.display = "none";
  } else {
    text1.style.display = "inline-block";
    text2.style.display = "inline-block";
  }
});

// Nav link detection

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 80;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("div nav li a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Smooth scroll animation for navigating to link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let targetId = link.getAttribute("href").substring(1);
    let targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop, // Adjusted offset for better accuracy
        behavior: "smooth",
      });
    }
  });
});

// Hamburger menu toggle
window.onload = () => {
  const menu_btn = document.querySelector(".hamburger");

  menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("is-active");
  });
};

// Event Timeline

const container = document.querySelector(".sponsers-slider");
const span = gsap.utils.toArray(".slider span");
const texts = gsap.utils.toArray(".anim");

let scrollTween = gsap.to(span, {
    xPercent: -100 * (span.length -1),
    ease : "none",
    scrollTrigger:{
        trigger:".sponsers-slider",
        pin:true,
        scrub:1,
        end:"+=2000",
    }
})
