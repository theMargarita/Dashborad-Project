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
    console.log(data);

  })
  .catch((error) => console.error(`Error fetching image: ${error}`));


  function showCat(){
    document.body.style.backgroundImage = `url(${data.url})`;
    document.getElementById(
      "description"
    ).textContent = `Description: ${data.url}`;
  }