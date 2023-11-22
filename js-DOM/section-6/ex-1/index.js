function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function () {
    const numberContainer = document.getElementById('number-container');

    for (let i = 100; i <= 1000; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('number');

        if (i % 2 === 0) {
            numberDiv.classList.add('even');
        } else {
            numberDiv.classList.add('odd');
        }

        if (isPrime(i)) {
            numberDiv.classList.add('prime');
        }

        numberDiv.textContent = i;
        numberContainer.appendChild(numberDiv);
    }
});