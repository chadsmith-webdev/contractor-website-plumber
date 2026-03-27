// =======================
// MOBILE MENU TOGGLE
// =======================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", () => {
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
});

// Close menu when a link is clicked
navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// =======================
// MODAL FUNCTIONALITY
// =======================
class Modal {
  constructor(modalElement) {
    this.modal = modalElement;
    this.closeBtn = modalElement.querySelector(".modal-close");
    this.overlay = modalElement.querySelector(".modal-overlay");
    this.form = modalElement.querySelector("form");

    this.setupListeners();
  }

  setupListeners() {
    // Close button
    this.closeBtn?.addEventListener("click", () => this.close());

    // Click outside (overlay)
    this.overlay?.addEventListener("click", () => this.close());

    // Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !this.modal.hidden) {
        this.close();
      }
    });

    // Form submission
    this.form?.addEventListener("submit", (e) => this.handleSubmit(e));
  }

  open() {
    this.modal.hidden = false;
    document.body.style.overflow = "hidden";
    // Focus trap for accessibility
    this.modal.querySelector("input")?.focus();
  }

  close() {
    this.modal.hidden = true;
    document.body.style.overflow = "";
  }

  handleSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Here you would normally send to a server
    console.log("Form submitted:", data);

    // Show success message
    alert(
      "Thank you! We'll contact you soon to schedule your free inspection.",
    );

    // Reset form and close
    e.target.reset();
    this.close();
  }
}

// Initialize modals
document.querySelectorAll(".modal").forEach((modal) => {
  new Modal(modal);
});

// Open modal when buttons with data-modal are clicked
document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      const modalInstance = new Modal(modal);
      modalInstance.open();
    }
  });
});

// =======================
// FAQ ACCORDION
// =======================
class Accordion {
  constructor() {
    this.items = document.querySelectorAll(".faq-item");
    this.setupListeners();
  }

  setupListeners() {
    this.items.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      question?.addEventListener("click", () => {
        this.toggle(item, question, answer);
      });
    });
  }

  toggle(item, question, answer) {
    const isExpanded = question.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      this.close(question, answer);
    } else {
      // Close all other items
      this.items.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherQuestion = otherItem.querySelector(".faq-question");
          const otherAnswer = otherItem.querySelector(".faq-answer");
          this.close(otherQuestion, otherAnswer);
        }
      });

      // Open this item
      this.open(question, answer);
    }
  }

  open(question, answer) {
    question.setAttribute("aria-expanded", "true");
    answer.hidden = false;
  }

  close(question, answer) {
    question.setAttribute("aria-expanded", "false");
    answer.hidden = true;
  }
}

// Initialize accordion
new Accordion();

// =======================
// SMOOTH SCROLL BEHAVIOR
// =======================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        // Account for fixed navbar height
        const navHeight =
          document.querySelector(".navbar").offsetHeight +
          document.querySelector(".emergency-banner").offsetHeight;
        const targetPosition = target.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// =======================
// LAZY LOADING IMAGES
// =======================
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Images are already loaded from unsplash in our case,
        // but this setup allows for lazy loading if needed
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => {
    imageObserver.observe(img);
  });
}

// =======================
// ACTIVE NAV LINK TRACKING
// =======================
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      const sectionId = section.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNavLink);

// =======================
// PERFORMANCE: Debounce scroll listener
// =======================
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateActiveNavLink();
      ticking = false;
    });
    ticking = true;
  }
});

// =======================
// FOCUS MANAGEMENT FOR ACCESSIBILITY
// =======================
// Manage focus when modals open/close
document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    const modal = document.querySelector(".modal:not([hidden])");
    if (modal) {
      const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift+Tab pressed
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab pressed
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  }
});

// =======================
// ANALYTICS (optional placeholder)
// =======================
// Track CTA button clicks
document.querySelectorAll("[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    // If you have analytics, you could track here
    // Example: gtag('event', 'cta_click', { 'button': 'schedule_inspection' });
    console.log("CTA clicked:", btn.textContent);
  });
});

// =======================
// PAGE LOAD ANIMATIONS (optional)
// =======================
window.addEventListener("load", () => {
  // Add loaded state
  document.body.classList.add("loaded");

  // Fade in hero content if desired
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.animation = "fadeIn 0.8s ease-out forwards";
  }
});

// =======================
// FORM VALIDATION (basic)
// =======================
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    // HTML5 validation handles most of it
    // This is a fallback for compatibility
    const inputs = form.querySelectorAll("[required]");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "#dc2626";
      } else {
        input.style.borderColor = "";
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});

// =======================
// UTILITY: Get parameter from URL
// =======================
function getUrlParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Example: Auto-open modal if ?quote=1 in URL
document.addEventListener("DOMContentLoaded", () => {
  if (getUrlParam("quote") === "1") {
    const quoteModal = document.getElementById("quote-form");
    if (quoteModal) {
      const modalInstance = new Modal(quoteModal);
      modalInstance.open();
    }
  }
});

// =======================
// ANIMATION HELPER
// =======================
const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Add animation styles dynamically if not in CSS
if (!document.querySelector("style[data-animations]")) {
  const style = document.createElement("style");
  style.setAttribute("data-animations", "true");
  style.textContent = fadeIn;
  document.head.appendChild(style);
}

console.log("FlowRight Plumbing website initialized");
