export function renderPodcasts(podcasts) {
  const cardSection = document.querySelector("#card-section");
  cardSection.innerHTML = "";

  podcasts.forEach((podcast, index) => {
    const card = document.createElement("div");
    card.classList.add("podcast-card");
    card.dataset.index = index;

    card.innerHTML = `
      <img class="podcast-image" src="${podcast.image}" alt="${podcast.title}" />
      <h2 class="podcast-title">${podcast.title}</h2>
      
      <div class="seasons-section">
        <img class="seasons-icon" src="./images/seasons-icon.svg" alt="Season icon" />
        <span class="num-seasons">${podcast.seasons} seasons</span>
      </div>

      <div class="genre-section">
        ${podcast.tags.map(tag => `<span class="genre-name">${tag}</span>`).join("")}
      </div>

      <p class="updated-status">${podcast.updated}</p>
    `;

    cardSection.appendChild(card);
  });
}

export function renderModal(podcast) {
  document.querySelector("#modal-heading-title").textContent = podcast.title;
  document.querySelector("#modal-image").src = podcast.image;
  document.querySelector("#modal-description").textContent = podcast.description;
  
  const genreContainer = document.querySelector("#modal-genre-container");
  genreContainer.innerHTML = "";
  podcast.tags.forEach(tag => {
    const span = document.createElement("span");
    span.classList.add("modal-genre-item");
    span.textContent = tag;
    genreContainer.appendChild(span);
  });

  document.querySelector("#modal-last-updated").textContent = podcast.updated;
  document.querySelector("#overlay").style.display = "block";
  document.querySelector("#modal").style.display = "block";
}