const container = document.createElement("div");
container.style.display = "grid";
container.setAttribute("id","container");
const main = document.querySelector("#main");
main.appendChild(container);

const newBtn = document.querySelector("#new-grid");
const clearBtn = document.querySelector("#clear");
const rgbBtn = document.querySelector("#rgb");
const blackBtn = document.querySelector("#black");

function createGrid(gridSize) {
    container.style.gridTemplate = `repeat(${gridSize},1fr) / repeat(${gridSize},1fr)`;
    for(let i = 0; i < gridSize * gridSize; ++i){
        const div = document.createElement("div");
        container.appendChild(div);
    }
    hover();
}

function reset() {
    const div = document.querySelectorAll("#container > div");
    div.forEach((div) => {
        div.parentNode.removeChild(div);
    })
}

function hover() {
    const div = document.querySelectorAll("#container  div");
    div.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.background = "black";
        });
    });
}

function rgbHover() {
    const div = document.querySelectorAll("#container  div");
    div.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.background = rgbColor();
        });
    });
}

function rgbColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return('rgb(' + r + ',' + g + ',' + b + ')');
}

newBtn.addEventListener('click', () => {
    reset();
    const userSize = +(prompt("Size: ", "16"));
    const newSize = userSize > 100 ? 100 : userSize;
    createGrid(newSize);
});

clearBtn.addEventListener('click', () => {
    const div = document.querySelectorAll("#container > div");
    div.forEach((div) => {
            div.style.background = "white";
        });
});

rgbBtn.addEventListener('click', rgbHover);

blackBtn.addEventListener('click', hover);

container.addEventListener('mouseenter',() => {
        container.style.borderColor = "rgba(235, 75, 26, 0.908)";
});

container.addEventListener('mouseleave',() => {
    container.style.borderColor = "rgba(235, 75, 26, 0.608)";
});

createGrid(16);