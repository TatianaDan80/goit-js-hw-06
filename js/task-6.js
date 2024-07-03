document.addEventListener('DOMContentLoaded', function () {
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    const controlsInput = document.querySelector('#controls input');
    const btnCreate = document.querySelector('[data-create]');
    const btnDestroy = document.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    function createBoxes(amount) {
        boxesContainer.innerHTML = ''; // Clear previous boxes

        let size = 30;
        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            boxesContainer.appendChild(box);
            size += 10;
        }
    }

    function destroyBoxes() {
        boxesContainer.innerHTML = '';
    }

    btnCreate.addEventListener('click', function () {
        const amount = parseInt(controlsInput.value);
        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
        }
        controlsInput.value = '';
    });

    btnDestroy.addEventListener('click', function () {
        destroyBoxes();
    });
});
