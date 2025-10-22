let bk = document.getElementById("text2");
const fonts = [
  "Arial, sans-serif",
  "Verdana, sans-serif",
  "Tahoma, sans-serif",
  "Trebuchet MS, sans-serif",
  "Gill Sans, sans-serif",
  "Noto Sans, sans-serif",
  "Segoe UI, sans-serif",
  "Helvetica, sans-serif",
  "Impact, sans-serif",
  "Futura, sans-serif",
  "Lucida Sans, sans-serif",
  "Franklin Gothic Medium, sans-serif",
  "Century Gothic, sans-serif",
  "Calibri, sans-serif",
  "Optima, sans-serif",
  "Times New Roman, serif",
  "Georgia, serif",
  "Garamond, serif",
  "Palatino, serif",
  "Baskerville, serif",
  "Book Antiqua, serif",
  "Cambria, serif",
  "Didot, serif",
  "Constantia, serif",
  "Courier New, monospace",
  "Lucida Console, monospace",
  "Monaco, monospace",
  "Consolas, monospace",
  "Inconsolata, monospace",
  "Roboto, sans-serif",
  "Open Sans, sans-serif",
  "Lato, sans-serif",
  "Poppins, sans-serif",
  "Montserrat, sans-serif",
  "Raleway, sans-serif",
  "Nunito, sans-serif",
  "Josefin Sans, sans-serif",
  "Quicksand, sans-serif",
  "Ubuntu, sans-serif",
  "Karla, sans-serif",
  "Merriweather, serif",
  "Playfair Display, serif",
  "Crimson Text, serif",
  "Cormorant Garamond, serif",
  "Libre Baskerville, serif",
  "DM Serif Display, serif",
  "Space Mono, monospace",
  "JetBrains Mono, monospace",
  "PT Sans, sans-serif",
  "Exo 2, sans-serif",
  "Work Sans, sans-serif",
  "Rubik, sans-serif",
  "Inter, sans-serif",
  "Oswald, sans-serif"
];

let currentFontIndex = 0;

function changeFont() {
  bk.style.fontFamily = fonts[currentFontIndex];
  currentFontIndex = (currentFontIndex + 1) % fonts.length;
}

setInterval(changeFont, 300);