const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();

let futureDate = new Date(2023, 2, 11, 9, 0);

// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 9, 30, 0);
console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// let month = futureDate.getMonth();
// month = months[month];
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
// let day = futureDate.getDay();
// day = weekdays[day];
let day = weekdays[futureDate.getDay()];

giveaway.textContent = `This special moment will happened at ${day}, ${date} ${month} ${year} ${hours}:${minutes}am`;

// future tume in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array;
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this give away has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
