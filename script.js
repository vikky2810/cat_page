const factText = document.getElementById("cat-fact");
const button = document.getElementById("fact-btn");

async function loadCatFact() {
  factText.textContent = "Loading a cat fact...";
  button.disabled = true;
  button.textContent = "Fetching...";

  try {
    const response = await fetch("https://catfact.ninja/fact", {
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    factText.textContent = data.fact || "No fact returned from the API.";
  } catch (error) {
    factText.textContent =
      "Sorry, we couldn't fetch a cat fact right now. Please try again.";
    console.error("Cat fact API error:", error);
  } finally {
    button.disabled = false;
    button.textContent = "Show me a cat fact";
  }
}

button.addEventListener("click", loadCatFact);
