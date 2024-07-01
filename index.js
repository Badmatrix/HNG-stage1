const UtcDay = document.querySelector("#utcDay");
const UtcDate = document.querySelector("#date");
const now = new Date();
const today = now.getUTCDay();
const date = now.getUTCDate()
const month = now.getUTCMonth();
const year = now.getUTCFullYear();

const daysOfTheWeek = [
  "Sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const dayUtc = daysOfTheWeek[today];
UtcDay.textContent = `${dayUtc}, `;
UtcDate.textContent = `${String(date).padStart(2, 0)}/${String(
  month + 1
).padStart(2, 0)}/${year}`;
// , 