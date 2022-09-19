const gridContainer = document.querySelector('.grid-container');

const gridSizeSlider = document.querySelector('.grid-size-slider');
const gridSizeText = document.querySelector('.grid-size-text');
gridSizeText.textContent = `Grid size: ${gridSizeSlider.value}`;

updateGrid(gridSizeSlider.value)

function updateGrid(val) {
    gridSizeText.textContent = `Grid size: ${val}`;

    // TODO clear or child elements
    while (gridContainer.firstChild) {
        console.log("enter while");
        gridContainer.removeChild(gridContainer.firstChild);
        console.log("exit while");
    }

    for(let i = 1; i <= gridSizeSlider.value**2; ++i) {

        console.log("gridsize", gridSizeSlider.value);
        gridContainer.style.setProperty('grid-template-columns', `repeat(${gridSizeSlider.value}, 1fr)`);
        const newDiv = document.createElement('div');
        newDiv.style.setProperty('border', '0px inset blue');
        newDiv.style.setProperty('background-color', 'white');
        // newDiv.style.setProperty('width', '10');
        // newDiv.style.setProperty('height', '10');
        // newDiv.insertAdjacentText('beforeend', i);
        gridContainer.appendChild(newDiv);
    }

    for(let i = 0; i < gridContainer.children.length; ++i)
    {
        gridContainer.children[i].addEventListener('mouseenter', (event) => {gridContainer.children[i].style.setProperty('background-color', 'black');});
    }
}


