var image = [
  "url(/images/izizsfoto.2.jpg)",
  "url(/images/izizsfoto.jpg)",
  "url(/images/konica_pic_of_flower.jpg)",
  "url(/images/konica.jpg)",
  "url(/images/pentax.jpg)",
];

var i = 0;

document.querySelector(".change-btn").addEventListener("click", function () {
  // makes sure that i never go out of bounds
  // if it reach to length it will return to 0
  i = (i + 1) % image.length;
  document.body.style.backgroundImage = image[i];
});
