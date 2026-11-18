"use strict";

const display = document.getElementById("display");

// click on key & add key to the display
const append = (v) => {
  display.value += v;
};
// display clear
const clearDisplay = () => {
  display.value = "";
};

const calculate = () => {
  try {
    if (!/^[\d+\-*/.() ]+$/.test(display.value)) throw new Error();
    const r = Function('"use strict"; return (' + display.value + ")")();
    display.value = Number.isFinite(r) ? r : "Error";
  } catch {
    display.value = "Error";
  }
};
 