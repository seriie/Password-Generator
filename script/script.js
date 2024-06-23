const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('passwordOutput');
const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');

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

passwordOutput.addEventListener('click', () => {
    const password = passwordOutput.textContent;
    if (password !== 'Your password will be here') {
        copyToClipboard(password);
    }
});

function copyToClipboard(text) {
    // Buat elemen textarea untuk menampung teks yang akan disalin
    let textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';  // Pastikan elemen tidak terlihat
    document.body.appendChild(textarea);

    // Pilih teks dalam elemen textarea
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length); // Pilih seluruh teks

    try {
        // Cobalah menyalin teks ke clipboard menggunakan API Clipboard
        let successful = document.execCommand('copy');
        if (successful) {
            myAlerts('Copied to clipboard!');
        } else {
            throw new Error('Failed copy to clipboard.');
        }
    } catch (err) {
        console.error('Error:', err);
        myAlerts('Failed copy to clipboard.Please try again.');
    } finally {
        // Hapus elemen textarea yang sudah tidak diperlukan lagi
        document.body.removeChild(textarea);
    }
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
}, 1000)

// const zee = document.querySelectorAll('.section .zee');

// zee.forEach(element => {
//     element.addEventListener('click', function () {
//         window.open('https://instagram.com/zzzeeee05', '_blank');
//     });
// });