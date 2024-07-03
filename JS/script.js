const colorBox = document.querySelector('.color-box');
const generateBtn = document.getElementById('generate-btn');
const customizeBtn = document.getElementById('customize-btn');
const colorPicker = document.getElementById('color-picker');
const copyBtn = document.getElementById('copy-btn');
const tryColorBtn = document.getElementById('try-color-btn');

let lastGeneratedColor = ''; 

function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

generateBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
    lastGeneratedColor = randomColor; 
});

customizeBtn.addEventListener('click', () => {
    colorPicker.click();
});

colorPicker.addEventListener('input', () => {
    const selectedColor = colorPicker.value;
    colorBox.style.backgroundColor = selectedColor;
    lastGeneratedColor = selectedColor; 
});

copyBtn.addEventListener('click', () => {
    const originalText = copyBtn.textContent;
    copyBtn.textContent = 'Your code is copied!';
    navigator.clipboard.writeText(lastGeneratedColor).then(() => {
        console.log('Color code copied to clipboard!');
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Error copying color code: ', err);
    });
});

tryColorBtn.addEventListener('click', () => {
    const backgroundSpace = document.getElementById('Background-space');
    backgroundSpace.style.backgroundColor = lastGeneratedColor; 
});
