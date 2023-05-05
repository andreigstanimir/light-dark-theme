const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// prettier-ignore
const selectors = ["input[type='checkbox']",".nav",".toggle-icon",".image1",".image2",".image3",".text-box",
];

const elements = selectors.map((selector) => document.querySelector(selector));

const [toggleSwitch, nav, toggleIcon, image1, image2, image3, textBox] =
  elements;

// Dark or Light Images
const imageMode = function (color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

const toggleDarkLightMode = function (isLight) {
  const bgColor =
    isLight === LIGHT_THEME ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
  const textColor =
    isLight === LIGHT_THEME ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
  const toggleText = isLight === LIGHT_THEME ? "Light Mode" : "Dark Mode";
  const toggleClass = isLight === LIGHT_THEME ? "fa-sun" : "fa-moon";

  nav.style.backgroundColor = bgColor;
  textBox.style.backgroundColor = textColor;
  toggleIcon.children[0].textContent = toggleText;
  toggleIcon.children[1].classList.replace(
    toggleClass === "fa-sun" ? "fa-moon" : "fa-sun",
    toggleClass
  );

  isLight === LIGHT_THEME ? imageMode(LIGHT_THEME) : imageMode(DARK_THEME);
};

// Switch Theme Dinamically
const switchTheme = function (event) {
  const theme = event.target.checked ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleDarkLightMode(theme);
};

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
