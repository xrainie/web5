"use strict";
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
});
function onClick() {
  alert("click");
}
function click1() {
  let f1 = document.getElementsByName("cost");
  let f2 = document.getElementsByName("count");
  let r = document.getElementById("result");
  if (!Number(f1[0].value) && !Number(f2[0].value)) {
    alert("Поле 1 и 2 не являются числами");
    r.innerHtML = none;
    return false;
  }
  if (!Number(f1[0].value)) {
    alert("Поле 1 не является числом");
    r.innerHtML = none;
    return false;
  }
  if (!Number(f2[0].value)) {
    alert("Поле 2 не является числом");
    r.innerHtML = none;
    return false;
  }
  r.innerHTML = f1[0].value * f2[0].value;
  return false;
}
