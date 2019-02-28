// Get Modal Element

var modal = document.getElementById("simpleModal");

// Get open modal button

var modalBtn = document.getElementById("modalBtn");

// Get Close Button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside Click
window.addEventListener("click", clickOutside);

// Function to close modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

// Function to open modal
function closeModal() {
  modal.style.display = "none";
}
