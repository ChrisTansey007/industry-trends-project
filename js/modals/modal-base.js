// Base modal functionality using Tailwind CSS and vanilla JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Initialize modals based on data attributes
  const modalTriggers = document.querySelectorAll("[data-modal-target]");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal-target");
      openModal(modalId);
    });
  });

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("open");
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }
  }

  function closeModal(modal) {
    modal.classList.remove("open");
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  // Add event listeners to close buttons
  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", function () {
      closeModal(this.parentElement);
    });
  });

  document.querySelectorAll(".modal-close-button").forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal-container");
      closeModal(modal.querySelector(".modal-backdrop"));
    });
  });
});

// Extend this with specific modal content for each use case
// Example: Add logic to load modal content dynamically if needed
