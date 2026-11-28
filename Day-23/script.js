console.log("Hello from Node");

console.log(document);

console.log(console);

const mainTitle = document.getElementById("Cosmetic-Text");
console.log(mainTitle);
const normalText = document.querySelector(".normal-text");
console.log(normalText);
if (mainTitle.textContent) {
  normalText.textContent = "Utilize more eye shadow";
}
const mainCta = document.getElementById("main-cta");
console.log(mainCta);

mainCta.addEventListener("click", greetMessage);
function greetMessage() {
  alert("Buy an eye shadow");
}
const detailsButton = document.querySelector("#details-button");
const activityMessage = document.querySelector("#activity-message");
let showDetails = false;
function getHubMessage(isDetailed) {
  if (isDetailed) {
    return "Cosmetic content.";
  } else {
    return "Reading circle: read about how to apply cosmetics.";
  }
}

function handleDetailsClick() {
  showDetails = !showDetails;
  activityMessage.textContent = getHubMessage(showDetails);

  if (showDetails) {
    detailsButton.textContent = "Show summary";
  } else {
    detailsButton.textContent = "Show more details";
  }
}

detailsButton.addEventListener("click", handleDetailsClick);
//My Prediction - I think the message will change to "Cosmetic Content."
// I was correct or I was wrong
if (0) {
  console.log("Testing tru or false values");
}