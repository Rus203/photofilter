const inversion = document.getElementById("invertRange");
const brightness = document.getElementById("brightnessRange");
const blurred = document.getElementById("blurRange");
const saturate = document.getElementById("saturateRange");
const sepia = document.getElementById("sepiaRange");

const color = document.getElementById("color");
const html = document.documentElement;

const slides = document.querySelectorAll(".bg-img");
const slider = document.querySelector(".slider");

const btnReset = document.getElementById("reset");
const btnNext = document.getElementById("next");

const blurValue = document.getElementById("blur_value");
const brightnessValue = document.getElementById("brightness_value");
const saturateValue = document.getElementById("saturate_value");
const invertValue = document.getElementById("invert_value");
const sepiaValue = document.getElementById("sepia_value")

// variable for work
let currentSlide = 0;
let isInvert = true;
let isSepia = true;
let invert_value = 0, 
blur_value = 0, 
brightness_value = 100, 
saturate_value = 100, 
sepia_value = 0;

// special settings
invertPreset.style.filter = `invert(100%)`;
sepiaPreset.style.filter = `sepia(100%)`;
color.value = "#FFFAF0";
CSS.innerHTML = `CSS code: Blur ${blur_value}px  Brightness ${brightness_value}%  Saturate ${saturate_value}%  Invert ${invert_value}%  Sepia ${sepia_value
}%`;


// filters & code of CSS


let invert = () =>
{
  invert_value = inversion.value;
  
  invertValue.innerHTML = `Invert: ${invert_value}%`;
  useFilterAndCodeOfCSS();
}

let toBlur = () =>
{
  blur_value = blurred.value;

  blurValue.innerHTML = `Blur: ${blur_value}px`;
  useFilterAndCodeOfCSS();
}

let changeBrightness = () =>
{
  brightness_value = brightness.value;

  brightnessValue.innerHTML = `Brightness: ${brightness_value}%`;
  useFilterAndCodeOfCSS();
}

let changeSaturate = () =>
{
  saturate_value = saturate.value;
  saturateValue.innerHTML = `Saturate: ${saturate_value}%`
  useFilterAndCodeOfCSS();
}

let changeSepia = () =>
{
  sepia_value = sepia.value;
  sepiaValue.innerHTML = `Sepia: ${sepia_value}%`;
  useFilterAndCodeOfCSS();
}

let useFilterAndCodeOfCSS = () =>
{
  slider.style.filter = `blur(${blur_value}px) brightness(${brightness_value}%) saturate(${saturate_value}%) invert(${invert_value}%) sepia(${sepia_value
  }%)`;
  CSS.innerHTML = `CSS code: Blur ${blur_value}px  Brightness ${brightness_value}%  Saturate ${saturate_value}%  Invert ${invert_value}%  Sepia ${sepia_value
  }%`;
}

// buttons

function reset()
{
  saturate.value = 100;
  saturateValue.innerHTML = `Saturate: 100%`;
  brightness.value = 100;
  brightnessValue.innerHTML = `Brightness: 100%`;
  blurred.value = 0;
  blurValue.innerHTML = `Blur 0px`
  inversion.value = 0;
  invertValue.innerHTML = `Invert 0%`;
  sepiaValue.innerHTML = `Sepia 0%`;
  sepia.value = 0;
  invert_value = 0;
  blur_value = 0;
  brightness_value = 100; 
  saturate_value = 100;
  sepia_value = 0;
  useFilterAndCodeOfCSS();
}

function nextPicture()
{
  ++currentSlide;
  if(currentSlide === slides.length)
    currentSlide = 0;
  slider.style.transform = `translateY(-${500 * currentSlide}px)`;
  invertPreset.src = slides[currentSlide].src;
  sepiaPreset.src = slides[currentSlide].src;

}

function changeTheme()
{
  html.style.backgroundColor = `${color.value}`;
}

// presets

let useInvertPreset = () =>
{
  if(isInvert)
  {
    invert_value = 100;
    isInvert = false;
    inversion.value = 100;
    invertValue.innerHTML = `Invert 100%`;
  }
  else
  {
    isInvert = true;
    invert_value = 0;
    inversion.value = 0;
    invertValue.innerHTML = `Invert 0%`;
  }

  sepia_value = 0;
  blur_value = 0;
  brightness_value = 100;
  saturate_value = 100;
  useFilterAndCodeOfCSS();
}

let useSepiaPreset = () =>
{
  if(isSepia)
  {
    slider.style.filter = `sepia(100%)`;
    isSepia = false;
    sepia_value = 100;
    sepiaValue.innerHTML = `Sepia 100%`;
    sepia.value = 100;
  }
  else
  {
    slider.style.filter = `sepia(0%)`;
    isSepia = true;
    sepia_value = 0;
    sepiaValue.innerHTML = `Sepia 0%`;
    sepia.value = 0;
  }
  invert_value = 0;
  blur_value = 0;
  brightness_value = 100; 
  saturate_value = 100;
  useFilterAndCodeOfCSS();
}

inversion.addEventListener('input', () => invert());
blurred.addEventListener('input', () => toBlur());
brightness.addEventListener('input', () => changeBrightness());
saturate.addEventListener('input', () => changeSaturate());
sepia.addEventListener('input', () => changeSepia())

btnReset.addEventListener('click', () => reset());
btnNext.addEventListener('click', () => nextPicture());

color.addEventListener('input', () => changeTheme());

invertPreset.addEventListener('click', () => useInvertPreset());
sepiaPreset.addEventListener('click', () => useSepiaPreset());





