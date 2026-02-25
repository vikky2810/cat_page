const factText = document.getElementById("cat-fact");
const button = document.getElementById("fact-btn");
const statusText = document.getElementById("status");

const fallbackFacts = [
  "Cats can rotate their ears 180 degrees.",
  "A group of cats is called a clowder.",
  "Cats sleep for around 12 to 16 hours a day.",
  "Every cat's nose print is unique, like a fingerprint.",
  "Cats use their whiskers to sense nearby objects and spaces."
];

function setStatus(message = "", state = "") {
  statusText.textContent = message;
  statusText.className = `status ${state}`.trim();
}

function randomFallbackFact() {
  const randomIndex = Math.floor(Math.random() * fallbackFacts.length);
  return fallbackFacts[randomIndex];
}

async function fetchCatFact() {
  button.disabled = true;
  setStatus("Loading a fresh cat fact…", "loading");

  try {
    const response = await fetch("https://catfact.ninja/fact", {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`API request failed (${response.status})`);
    }

    const data = await response.json();

    if (!data.fact) {
      throw new Error("API response missing fact text");
    }

    factText.textContent = data.fact;
    setStatus("Loaded from catfact.ninja ✅", "success");
  } catch (error) {
    factText.textContent = randomFallbackFact();
    setStatus("API unavailable, showing a local backup fact.", "error");
    console.error("Unable to fetch cat fact:", error);
  } finally {
    button.disabled = false;
  }
}

button.addEventListener("click", fetchCatFact);
