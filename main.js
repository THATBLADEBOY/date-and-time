let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;

// console.log(today);

const container = document.querySelector(".container");
const pageHeader = document.createElement("h1");
const dateAndTimeContainer = document.createElement("article");
const updateTimeButton = document.createElement("button");
pageHeader.textContent = "The Current Date and Time is..";
dateAndTimeContainer.textContent = `${today}`;
updateTimeButton.textContent = "Update Time";
updateTimeButton.addEventListener("click", () => location.reload() )
container.appendChild(pageHeader);
container.appendChild(dateAndTimeContainer);
container.appendChild(updateTimeButton);
