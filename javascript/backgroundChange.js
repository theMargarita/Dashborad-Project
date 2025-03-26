// const apiKey = `jZJQBJJWA2KNoaXJj0uwq_2ztvM1_sSNtaQHwIqhNS0`;
const apiURL = `https://api.unsplash.com/photos/random?client_id=jZJQBJJWA2KNoaXJj0uwq_2ztvM1_sSNtaQHwIqhNS0`;

const background = document.querySelector(".change-btn");

background.addEventListener("click", function () {
  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const pictureUrl = `url(${data.urls.regular})`;
      console.log(pictureUrl);
      document.body.style.backgroundImage = pictureUrl;
    })
    .catch((error) => console.error("Error fetching image:", error));
});
