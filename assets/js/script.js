/* ===========================
   MOBILE NAV TOGGLE
=========================== */
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* ===========================
   SMOOTH SCROLL
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

/* ===========================
   SET CURRENT YEAR
=========================== */
document.getElementById("year").textContent = new Date().getFullYear();

/* ===========================
   SKILL BAR ANIMATION
=========================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fills = entry.target.querySelectorAll(".fill");
      fills.forEach(fill => {
        const value = fill.getAttribute("data-value");
        fill.style.width = value + "%";
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll(".skill-card").forEach(card => {
  observer.observe(card);
});

/* ===========================
   CONTACT FORM HANDLER
=========================== */
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.textContent = "Message sent successfully! I’ll get back to you soon.";
    formMsg.style.color = "#7be4ff";

    // Clear the form after send
    contactForm.reset();

    setTimeout(() => {
      formMsg.textContent = "";
    }, 4000);
  });
}

function mailtoHire() {
  window.location.href = "mailto:khajatabarak2000@gmail.com";
}

/* ===========================
   OPTIONAL: TYPED TEXT EFFECT
=========================== */
const typedEl = document.getElementById("typed");
const words = [
  "CI/CD Automation",
  "Kubernetes Deployments",
  "Cloud Infrastructure",
  "Monitoring & Alerts",
  "Infrastructure as Code"
];

let wordIndex = 0;
let charIndex = 0;

function type() {
  if (!typedEl) return;

  if (charIndex < words[wordIndex].length) {
    typedEl.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (!typedEl) return;

  if (charIndex > 0) {
    typedEl.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  }
}

type(); // start animation
