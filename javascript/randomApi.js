const apiKey =
  "live_ew6V4oiPOcrYietFCQl0nYqXMNsWVf4goRQLkVeUsEgOJydmBF80WNtDfdSz1qid";
const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=${apiKey}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const catBox  = document.querySelector(".cat-box");
    console.log(data);

    data.forEach(function (cat) {
      let image = document.createElement("img");
      image.src = cat.url;
      image.style.width = "200px";
      image.style.borderRadius = "10px";

      let description = document.createElement("p");
      description.textContent = cat.breeds[0]?.description || "No description available.";
      description.id = "cat-description"; // ser till att den matchar html

      catBox.classList.add("cat");
      catBox.appendChild(image);
      catBox.appendChild(description);
    });
  })
  .catch((error) => console.error(`Error fetching image: ${error}`));
