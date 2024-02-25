const generateSmallStars = (count) => {
  let starsContainer = document.querySelector("body");
  for (let i = 0; i < count; i++) {
    let star = document.createElement("div");
    star.className = "small-star"; // Ensure this class has your base star styling
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let size = Math.random() * 3;
    let delay = Math.random() * 3 + 1; // Random delay between 0 to 2 seconds

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animation = `3s twinkle ${delay}s infinite`;
    star.className = "small-star";

    starsContainer.appendChild(star);
  }
};

const createFallingStar = () => {
  let starsContainer = document.querySelector("body");

  const fallingStar = document.createElement("div");
  fallingStar.classList.add("falling-star");

  //Randomize starting position
  const x = Math.random() * window.innerWidth;
  const y =
    Math.random() * (window.innerHeight * 0.9) + window.innerHeight * 0.1;

  //Randomize duration
  const duration = Math.random() * 2 + 1;

  fallingStar.style.left = `${x}px`;
  fallingStar.style.top = `${y}px`;

  fallingStar.style.animation = `falling-star ${duration}s linear forwards`;

  starsContainer.appendChild(fallingStar);

  //Remove the star from the DOM once it's done animating
  fallingStar.addEventListener("animationend", () => {
    fallingStar.remove();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const numberOfStars = window.innerWidth / 5;
  generateSmallStars(numberOfStars);
  setInterval(createFallingStar, Math.random() * 3000 + 1000);
});

document.addEventListener("resize", () => {
  const numberOfStars = window.innerWidth / 5;
  generateSmallStars(numberOfStars);
});
