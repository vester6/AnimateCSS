const btn = document.querySelector("[data-btn]");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  btn.classList.add("animating");
  // Wait for the button animation to finish before showing the modal
  setTimeout(() => {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  }, 1300); // Adjust based on total animation time
});

// Close the modal when clicking on the close button
closeBtn.addEventListener("click", () => {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
});
