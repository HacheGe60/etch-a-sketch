/* document.addEventListener("DOMContentLoaded", () => {
    const containerEl = document.querySelector(".container");
    const btnEl = document.querySelector("#size");

    btnEl.addEventListener("click", () => {
        let n = parseInt(prompt('Choose a number between 1 and 100'));
        if (n < 1 || n > 100 || typeof n !== "number") {
            btnEl.addEventListener("click", () => {
                n = prompt('Last chance, choose a number between 1 and 100');
            })
        }; console.log(n);
        return n;
    });

    function makeGrid() {
        for (let i = 0; i < n * n; i++) {
            const squareEl = document.createElement("div");
            squareEl.classList.add("square");
            containerEl.appendChild(squareEl);

            squareEl.addEventListener("mouseover", () => {
                const randomColor = getRandomColor();
                squareEl.style.backgroundColor = randomColor;
            });
        }
    }
    makeGrid;

    function getRandomColor() {
        let randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        console.log(randomColor);
        return randomColor;

    };
}); */

const containerEl = document.querySelector(".grid-container");
const resetBtnEl = document.getElementById("resetBtn");

function createGrid(size) {
    containerEl.innerHTML = '';
    containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const squareEl = document.createElement("div");
        squareEl.classList.add("grid-square");
        containerEl.appendChild(squareEl);

        squareEl.addEventListener("mouseover", () => {
            const randomColor = getRandomColor();
            squareEl.style.backgroundColor = randomColor;
        });
    }
}

function getRandomColor() {
    const randomRGBA = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`;
    return randomRGBA;
}

resetBtnEl.addEventListener("click", () => {
    const newSize = prompt("Enter the number of squares per side (up to 100):", 16);
    if (newSize && !isNaN(newSize) && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Invalid input. Please enter a valid number up to 100.");
    }
});

// Initial grid creation
createGrid(16);
