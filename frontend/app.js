document.addEventListener("DOMContentLoaded", function () {
  console.log("JS loaded: starting fetch...");

  fetch("http://localhost:8000/motility")
    .then((response) => {
      console.log("Fetch response received:", response);
      return response.json();
    })
    .then((data) => {
      console.log("Parsed JSON:", data);
      document.getElementById("day").textContent = data.day;
      document.getElementById("motility").textContent = data.motility;
      document.getElementById("stacking").textContent = data.stacking;
    })
    .catch((error) => {
      console.error("FETCH ERROR:", error);
    });
});
