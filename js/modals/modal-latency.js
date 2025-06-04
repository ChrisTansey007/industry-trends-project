// Latency modal functionality
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal-latency");

  // Initialize modal if it exists
  if (modal) {
    // Set modal content here
    document.querySelector(
      '[data-modal-title="Latency: Optimizing for Real-Time Response"]',
      modal
    ).innerText = "Latency: Optimizing for Real-Time Response";
    document.querySelector(".modal-content-area", modal).innerHTML = `
            <p>Content for Latency modal goes here.</p>
            <p>Details about optimizing for real-time response.</p>
        `;
  }
});
