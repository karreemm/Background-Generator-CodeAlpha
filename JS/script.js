const colorBox = document.querySelector('.color-box');
const generateBtn = document.getElementById('generate-btn');
const customizeBtn = document.getElementById('customize-btn');
const colorPicker = document.getElementById('color-picker');
const colorCodeInput = document.getElementById('color-code-input');
const copyBtn = document.getElementById('copy-btn');
const tryColorBtn = document.getElementById('try-color-btn');

function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

generateBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorCodeInput.value = randomColor;
});

customizeBtn.addEventListener('click', () => {
    colorPicker.click();
});

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorBox.style.backgroundColor = selectedColor;
    colorCodeInput.value = selectedColor;
});

copyBtn.addEventListener('click', () => {
    colorCodeInput.select();
    document.execCommand('copy');
});

tryColorBtn.addEventListener('click', () => {
    const selectedColor = colorCodeInput.value;
    document.body.style.backgroundColor = selectedColor;
});
