const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.querySelector('.password-output .text');
const passwordArea = document.querySelector('.password-output')
const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');

document.querySelector('.passwordGenerator').classList.add('active');
document.querySelector('.container .zee').classList.add('active');

setTimeout(() => {
    document.querySelector('.passwordGenerator').classList.remove('active');
    document.querySelector('.container .zee').classList.remove('active');
}, 2100);

setTimeout(() => {
    document.querySelector('.container').classList.add('active');
}, 1500);

document.querySelector('.container .password-output').classList.add('active');
document.querySelector('.form-group.length').classList.add('active');
document.querySelector('.form-group.char1').classList.add('active');
document.querySelector('.form-group.char2').classList.add('active');
document.querySelector('.form-group.char3').classList.add('active');
document.querySelector('.form-group.char4').classList.add('active');
document.querySelector('.generateBtn').classList.add('active');

setTimeout(() => {
    document.querySelector('.container .password-output').classList.remove('active');
}, 2400);

setTimeout(() => {
    document.querySelector('.form-group.length').classList.remove('active');
}, 2500);

setTimeout(() => {
    document.querySelector('.form-group.char1').classList.remove('active');
}, 2600);

setTimeout(() => {
    document.querySelector('.form-group.char2').classList.remove('active');
}, 2700);

setTimeout(() => {
    document.querySelector('.form-group.char3').classList.remove('active');
}, 2800);

setTimeout(() => {
    document.querySelector('.form-group.char4').classList.remove('active');
}, 2900);

setTimeout(() => {
    document.querySelector('.generateBtn').classList.remove('active');
}, 3000);

document.querySelector('i').classList.add('active');

generateBtn.addEventListener('click', () => {
    const length = + lengthInput.value;
    const includeUppercase = uppercaseInput.checked;
    const includeLowercase = lowercaseInput.checked;
    const includeNumbers = numbersInput.checked;
    const includeSymbols = symbolsInput.checked;

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        myAlerts('Please select at least one character type');
        return;
    }

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    if (length > 20) {
        myAlerts("Max password length is 20");
    } else if (length < 8) {
        myAlerts("Min password length is 8");
    } else {
        passwordOutput.textContent = password;
        document.querySelector('i').classList.remove('active');
        passwordArea.style.cursor = "pointer"; 
    }
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

passwordArea.addEventListener('click', () => {
    const password = passwordOutput.textContent;
    if (password !== 'Your password will be here') {
        copyToClipboard(password);
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
    .then(() => {
        myAlerts('Copied to clipboard!');
    })
    .catch(err => {
        console.err('Error:', err);
        myAlerts('Failed to copy to clipboard. Plase try again!')
    })
}

const button = document.querySelector('.alert .btn');
const alerts = document.querySelector('.alert');

button.addEventListener('click', function() {
    alerts.classList.remove('active');
});

function myAlerts(msg) {
    const alert = document.querySelector('.text');
    const alerts = document.querySelector('.alert');
    alert.textContent = msg;
    alerts.classList.add('active');
}

const loading = document.querySelector('.wrapper');

loading.style.visibility = "visible";

setTimeout(() => {
    loading.style.visibility = "hidden";
}, 1500);