import { getDate } from "./getDate.js";

window.onload = function () {
  const today = document.querySelector(".today");
  const date = getDate();

  today.innerHTML = date;
};
