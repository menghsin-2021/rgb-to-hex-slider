const redInput = document.querySelector("#redInput");
const greenInput = document.querySelector("#greenInput");
const blueInput = document.querySelector("#blueInput");
const convertBtn = document.querySelector("#convertBTN");
const yourHexNumber = document.querySelector("#yourHexNumber");
const swatch = document.querySelector("#swatch");
const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");

// Slider 轉換 Hex
function sliderConverter() {
  const redSlider = document.querySelector("#redSlider");
  const greenSlider = document.querySelector("#greenSlider");
  const blueSlider = document.querySelector("#blueSlider");
  const sliders = document.querySelectorAll(".sliderInput");

  sliders.forEach((slider) =>
    slider.addEventListener("input", function () {
      let redInputData = Number(redSlider.value);
      redInput.value = redInputData;
      let greenInputData = Number(greenSlider.value);
      greenInput.value = greenInputData;
      let blueInputData = Number(blueSlider.value);
      blueInput.value = blueInputData;
      let rgb = {
        red: redInputData,
        green: greenInputData,
        blue: blueInputData
      };
      rgbtoHexConverter(rgb);
    })
  );
}

//輸入數字轉換 Hex
function inputConverter() {
  convertBtn.addEventListener("click", function () {
    let redInputData = Number(redInput.value);
    redSlider.value = redInputData;
    let greenInputData = Number(greenInput.value);
    greenSlider.value = greenInputData;
    let blueInputData = Number(blueInput.value);
    blueSlider.value = blueInputData;
    let rgb = { red: redInputData, green: greenInputData, blue: blueInputData };
    rgbtoHexConverter(rgb);
  });
}

// 將轉換後的數值和樣式呈現在網頁上
function rgbtoHexConverter(rgbDict) {
  let hex = hexString(rgbDict);
  yourHexNumber.innerHTML = hex;
  swatch.style.backgroundColor = hex;
}

// 將轉換後的字串組好
function hexString(rgb) {
  let r = toHex(rgb.red);
  let g = toHex(rgb.green);
  let b = toHex(rgb.blue);
  return "#" + r + g + b;
}

// 將RGB數字轉換成Hex字串
function toHex(n) {
  if (n >= 0 && n <= 255) {
    let hex = n.toString(16).toUpperCase();
    while (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  } else {
    alert("請輸入0~255");
    return "FF";
  }
}

// main function
inputConverter();
sliderConverter();

// reference
// https://www.w3schools.com/colors/colors_converter.asp
// https://www.rapidtables.com/convert/color/rgb-to-hex.html
// https://codepen.io/geekgirljoy/full/NNOGWL