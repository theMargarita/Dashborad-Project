
// DOM ensures that the script runns only after the html docuemtn is fully loaded 
document.addEventListener("DOMContentLoaded", function () {
  const addLinkBTN = document.querySelector(".add-link");
  addLinkBTN.addEventListener("click", addLink);
});
const linkInput = document.querySelector(".input-link");
const linkList = document.querySelector(".link-list");

// create a link elelemnt with favicon and deletebutton
function createLinkElement(linkValue) {
  const newListItem = document.createElement("li");

  // extract domain for favicon - domain = subset of the internet with addresses
  let domain;
  try {
    domain = new URL(linkValue).hostname;
  } catch (e) {
    alert("Invalid URL format");
    return null;
  }

  // favicon image
  const favicon = document.createElement("img");
  favicon.style.width = "16px";
  favicon.style.height = "16px";
  favicon.style.marginRight = "8px";
  favicon.src = `https://www.google.com/s2/favicons?domain=${domain}&sz=16`;

  // link element
  const linkElement = document.createElement("a"); //creates hyperlink
  linkElement.href = linkValue;
  linkElement.textContent = domain; //show domain instead of full url
  linkElement.target = "_blank"; // open new tab

  // creates a deletebtn for every link created
  const deleteBTN = document.createElement("button");
  deleteBTN.textContent = "X";
  deleteBTN.style.marginLeft = "8px";
  deleteBTN.style.crusor = "pointer";
  deleteBTN.onclick = function () {
    newListItem.remove();
    removeFromStorage(linkValue);
  };

  // append (add) favicon and link to the list item
  newListItem.appendChild(favicon);
  newListItem.appendChild(linkElement);
  newListItem.appendChild(deleteBTN);

  return newListItem; // return the complete list item
}

// localstorage
function addLink() {
  const linkValue = linkInput.value.trim(); //remove uneccessary spaces

  // checks if link is already in the list
  if (linkValue && isValidURL(linkValue)) {
    let links = JSON.parse(localStorage.getItem("links")) || []; //stores json in a string array isch

    if (!links.includes(linkValue)) {
      const newListItem = createLinkElement(linkValue);

      if (newListItem) {
        linkList.appendChild(newListItem);
        links.push(linkValue); //push is like add
        localStorage.setItem("links", JSON.stringify(links));
        linkInput.value = ""; //clear input
      }
    } else {
      alert("Link is already added");
    }
  } else {
    alert("Enter a valid URL");
  }
}

//checks if it is a proper url
function isValidURL(str) {
  try {
    new URL(str);
    return true;

  } catch (_) {
    return false;
  }
}

//get item 
function loadLinks() {
  const links = JSON.parse(localStorage.getItem("links")) || [];

  links.forEach((link) => {
    const newListItem = createLinkElement(link);
    if (newListItem) {
      linkList.appendChild(newListItem);
    }
  });
}

//set item 
function removeFromStorage(linkValue) {
  // localstorage --> gets the data from storage
  // getItem --> retirves links from storage
  // if links exists --> returns a string
  //if not exists then json ensures links is an empty array
  let links = JSON.parse(localStorage.getItem("links")) || [];
  links = links.filter((link) => link !== linkValue);
  localStorage.setItem("links", JSON.stringify(links));
}

loadLinks();




