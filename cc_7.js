// Select DOM elements
const input = document.getElementById("cta-input");
const button = document.getElementById("cta-button");
const ctaText = document.getElementById("cta-text");

// Add event listener 
button.addEventListener("click", () => {
  const newHeadline = input.value.trim();
  if (newHeadline !== "") {
    ctaText.textContent = newHeadline;
    input.value = ""; // clear field
  } else {
    alert("Please enter a new headline!");
  }
});
