document.getElementById("calcBtn").addEventListener("click", function() {
  const scoreInput = document.getElementById("scoreInput");
  const results = document.getElementById("results");
  let score = scoreInput.value.trim();

  // Input validation
  if (score === "" || isNaN(score)) {
    results.textContent = "❌ Please enter a valid number.";
    results.style.color = "red";
    return;
  }

  score = Number(score);
  if (score < 0 || score > 100) {
    results.textContent = "❌ Score must be between 0 and 100.";
    results.style.color = "red";
    return;
  }

  // Grade calculation
  let grade = "";
  let description = "";
  let color = "";

  if (score >= 70) {
    grade = "A"; description = "Excellent"; color = "green";
  } else if (score >= 60) {
    grade = "B"; description = "Very Good"; color = "blue";
  } else if (score >= 50) {
    grade = "C"; description = "Good"; color = "orange";
  } else if (score >= 40) {
    grade = "D"; description = "Pass"; color = "brown";
  } else {
    grade = "F"; description = "Fail"; color = "red";
  }

  // Display result dynamically
  results.innerHTML = `Score: ${score} <br> Grade: ${grade} (${description})`;
  results.style.color = color;

  // Reset input field
  scoreInput.value = "";
  scoreInput.focus();
});

// Optional: Enter key support
document.getElementById("scoreInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    document.getElementById("calcBtn").click();
  }
});
