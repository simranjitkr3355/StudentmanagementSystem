const exploreBtn = document.getElementById("exploreBtn");
const message = document.getElementById("message");

exploreBtn.addEventListener("click", () => {
  message.textContent = "✨ Your next great project starts here!";
  exploreBtn.textContent = "You’re Ready! ✓";
});
