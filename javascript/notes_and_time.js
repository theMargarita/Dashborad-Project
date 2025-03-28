// TIME AND DATE
const date = document.getElementById("current-date");
const time = document.getElementById("current-time");

setInterval(() => {
  // time
  const d = new Date();
  date.innerHTML = d.toLocaleDateString();
  // date
  const t = new Date();
  time.innerHTML = t.toLocaleTimeString();
}, 1000);

// -------------------------------------------------

// NOTES WORK
const notes = document.getElementById("note-box");

// get data
document.addEventListener("DOMContentLoaded", function () {
  notes.value = localStorage.getItem("userNote") || "";
});
// saves data
notes.addEventListener("input", function () {
  localStorage.setItem("userNote", notes.value);
});

// ---------------------------------------------------
// DASHBOARD NAME
const dashboardName = document.querySelector(".dashboard-name");

  dashboardName.textContent = localStorage.getItem("userName") || "";

dashboardName.addEventListener("keypress", function () {
  localStorage.setItem("userName", dashboardName.textContent);
});
