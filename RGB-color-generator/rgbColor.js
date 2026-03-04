const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const colorDisplay = document.getElementById('color');
const copyButton = document.getElementById('copyButton');
const inputType = document.getElementById('inputType');

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
copyButton.addEventListener('click',copyRGBValue)
function updateColor() {
    const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    colorDisplay.style.backgroundColor=rgbColor;

    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;
    inputType.textContent = rgbColor;
}
updateColor();

function copyRGBValue() {
      const r = parseInt(redSlider.value);
    const g = parseInt(greenSlider.value);
    const b = parseInt(blueSlider.value);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    navigator.clipboard.writeText(rgbColor)
    .then(()=>{
        alert('RGB value copied : ' + rgbColor);
    })
    .catch(err =>{
        console.error('Failed to copy RGB value: ', err);
    })
}