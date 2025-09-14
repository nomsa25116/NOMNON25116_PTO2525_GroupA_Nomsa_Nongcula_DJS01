import { podcasts } from "./data.js";
import { renderPodcasts, renderModal } from "./Render.js";

// Initial render
renderPodcasts(podcasts);

// Open modal on card click
document.querySelector("#card-section").addEventListener("click", (e) => {
  const card = e.target.closest(".podcast-card");
  if (card) {
    const index = card.dataset.index;
    renderModal(podcasts[index]);
  }
});

// Close modal
document.querySelector("#modal-close-btn").addEventListener("click", () => {
  document.querySelector("#overlay").style.display = "none";
  document.querySelector("#modal").style.display = "none";
});

// Filter by genre
document.querySelector("#all-genres").addEventListener("change", (e) => {
  const genre = e.target.value;
  if (genre === "All Genres") {
    renderPodcasts(podcasts);
  } else {
    const filtered = podcasts.filter(p => p.tags.includes(genre));
    renderPodcasts(filtered);
  }
});