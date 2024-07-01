const UtcDay = document.querySelector("#utcDay");
const UtcDate = document.querySelector("#date");
const utcTime = document.querySelector("#utcTime");
const daysOfTheWeek = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const now = new Date();

const today = now.getUTCDay();
const dayUtc = daysOfTheWeek[today];
UtcDay.textContent = `${dayUtc}, `;
UtcDay.setAttribute("data-testid", dayUtc)

const hour = now.getHours();
const minutes = now.getUTCMinutes();
utcTime.textContent = `${hour}:${minutes}`;

const date = now.getUTCDate()
UtcDate.setAttribute("data-testid", date)
const month = now.getUTCMonth();
const year = now.getUTCFullYear();
UtcDate.textContent = `${String(date).padStart(2, 0)}/${String(
  month + 1
).padStart(2, 0)}/${year}`;

// console.log(UtcDate.getAttribute("data-testid"))
// console.log(UtcDay.getAttribute("data-testid"))
