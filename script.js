function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer${questionNumber}`);
  answer.style.display = answer.style.display === "none" ? "block" : "none";
}

// -------------- Gallery ----------------

const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let slideIndex = 0;

prevBtn.addEventListener("click", () => {
  slideIndex =
    (slideIndex - 1 + carousel.children.length) % carousel.children.length;
  updateCarouselPosition();
});

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % carousel.children.length;
  updateCarouselPosition();
});

function updateCarouselPosition() {
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// carousel

// JavaScript for the carousel section

function openCarousel(imageSrc, title, description) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  modalImage.src = imageSrc;
  modalTitle.textContent = title;
  modalDescription.textContent = description;

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};
