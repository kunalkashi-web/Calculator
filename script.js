let string = "";
const buttons = document.querySelectorAll(".key");
const screen = document.querySelector(".screen");
const radioBtns = document.querySelectorAll("input[name = 'radio']");

/*THEME SELECT*/
const background = document.querySelector("body");
const header = document.querySelector("header");
const keyContainer = document.querySelector("section");
const form = document.querySelector("header form");
const keys = document.querySelectorAll("section button");
const clearkeys = document.querySelectorAll("#clear-key");
const equalKey = document.querySelector("#equal-key");

let findSelected = () => {
  let selected = document.querySelector("input[name='radio']:checked").value;

  if (selected === "2") {
    background.classList.add("theme2-bg");
    background.classList.remove("theme3-bg");
    screen.classList.add("screen2");
    screen.classList.remove("screen3");
    header.classList.add("header2");
    header.classList.remove("header3");
    form.classList.add("radio-button-container2");
    form.classList.remove("radio-button-container3");
    keyContainer.classList.add("keys-container2");
    keyContainer.classList.remove("keys-container3");
    equalKey.classList.add("equal-key2");
    equalKey.classList.remove("equal-key3");

    for (key of keys) {
      key.classList.add("key2");
      key.classList.remove("key3");
    }

    for (clearkey of clearkeys) {
      clearkey.classList.add("clear-key2");
      clearkey.classList.remove("clear-key3");
    }
  } else if (selected === "3") {
    background.classList.add("theme3-bg");
    screen.classList.add("screen3");
    header.classList.add("header3");
    form.classList.add("radio-button-container3");
    keyContainer.classList.add("keys-container3");
    equalKey.classList.add("equal-key3");

    for (key of keys) {
      key.classList.add("key3");
    }
    for (clearkey of clearkeys) {
      clearkey.classList.add("clear-key3");
    }
  } else {
    background.classList.remove("theme3-bg", "theme2-bg");
    screen.classList.remove("screen3", "screen2");
    header.classList.remove("header2", "header3");
    form.classList.remove("radio-button-container3", "radio-button-container2");
    keyContainer.classList.remove("keys-container2", "keys-container3");
    equalKey.classList.remove("equal-key3", "equal-key2");

    for (key of keys) {
      key.classList.remove("key2", "key3");
    }

    for (clearkey of clearkeys) {
      clearkey.classList.remove("clear-key2", "clear-key3");
    }
  }
};

for (radio of radioBtns) {
  radio.addEventListener("change", findSelected);
}

for (button of buttons) {
  button.addEventListener("click", (e) => {
    const keyValue = e.target.innerHTML;

    if (keyValue === "=") {
      if (string === "") {
        screen.value = string;
      } else {
        string = eval(string);
        screen.value = string;
      }
    } else if (keyValue === "reset") {
      string = "";
      screen.value = string;
    } else if (keyValue === "del") {
      string = string.slice(0, -1);
      screen.value = string;
    } else {
      string = string + keyValue;
      screen.value = string;
    }
  });
}
