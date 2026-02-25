const facts = [
  "Cats can rotate their ears 180 degrees.",
  "A group of cats is called a clowder.",
  "Cats sleep for around 12 to 16 hours a day.",
  "Every cat's nose print is unique, like a fingerprint.",
  "Cats use their whiskers to sense nearby objects and spaces."
];

const factText = document.getElementById("cat-fact");
const button = document.getElementById("fact-btn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factText.textContent = facts[randomIndex];
});
