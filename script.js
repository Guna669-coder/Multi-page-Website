// ========== FORM VALIDATION ==========
// ✅ FIX: inline errors, email regex, trim, const, message field, success feedback
function validateForm() {
  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg   = document.getElementById("error-msg");
  const successMsg = document.getElementById("success-msg");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear previous messages
  errorMsg.textContent   = "";
  successMsg.textContent = "";

  if (!name || !email || !message) {
    errorMsg.textContent = "⚠️ Please fill in all fields!";
    return false;
  }

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "⚠️ Please enter a valid email address!";
    return false;
  }

  successMsg.textContent = "✅ Message sent successfully!";
  return true;
}

// ========== HAMBURGER MENU (MOBILE) ==========
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu   = document.querySelector("nav ul");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  // ========== SCROLL ANIMATION FOR CARDS ==========
  const cards = document.querySelectorAll(".card, .testimonial-card, .team-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.1}s`;
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
  });

  // ========== SMOOTH SCROLL ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Called by IntersectionObserver to animate cards in
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
});
