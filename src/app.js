function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poemKeywords = document.querySelector("#user-keywords");
  let apiKey = "9215d217o28938dd2t4a9f123417b908";
  let prompt = `Generate a poem about ${poemKeywords.value}`;
  let context =
    "You are an experienced poet who loves writing short poems about the beauty of life. Please generate a 4 line poem in basic HTML. Keep the answer direct without any filler language and remove visible code. Sign the poem at the bottom with 'SheCodes AI' in a <strong> element.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink">⏳ Generating a poem about ${poemKeywords.value}</div>`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
