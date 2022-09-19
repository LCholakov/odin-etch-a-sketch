const gridContainer = document.querySelector('.grid-container');

const gridSizeSlider = document.querySelector('.grid-size-slider');
const gridSizeText = document.querySelector('.grid-size-text');
gridSizeText.textContent = `Grid size: ${gridSizeSlider.value}`;

updateGrid(gridSizeSlider.value)

function updateGrid(val) {
    gridSizeText.textContent = `Grid size: ${val}`;

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for(let i = 1; i <= gridSizeSlider.value**2; ++i) {
        console.log("gridsize", gridSizeSlider.value);
        gridContainer.style.setProperty('grid-template-columns', `repeat(${gridSizeSlider.value}, 1fr)`);
        const newDiv = document.createElement('div');
        newDiv.style.setProperty('border', '0px inset blue');
        newDiv.style.setProperty('background-color', 'white');
        gridContainer.appendChild(newDiv);
    }

    for(let i = 0; i < gridContainer.children.length; ++i)
    {
        gridContainer.children[i].addEventListener('mouseenter', (event) => {setCellColor(gridContainer.children[i])});
        gridContainer.children[i].addEventListener('touchmove', (event) => {setCellColor(gridContainer.children[i])});
    }
}

function setCellColor(cell)
{
    currCellStyle = getComputedStyle(cell).backgroundColor;
    if (currCellStyle === 'rgb(255, 255, 255)')
    {
        cell.style.setProperty('background-color', getRandColor());
    } else
    {
        cell.style.setProperty('background-color', RGB_Linear_Shade(-.1, currCellStyle));
    }
    
}

function getRandColor()
{
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function RGB_Linear_Shade(p,col)
{
    let i=parseInt;
    let r=Math.round;
    let [a,b,c,d]=col.split(",");
    let P=p<0;
    let t=P?0:255*p;
    P=P?1+p:1-p;
    return"rgb"+(d?"a(":"(")+r(i(a[3]=="a"?a.slice(5):a.slice(4))*P+t)+","+r(i(b)*P+t)+","+r(i(c)*P+t)+(d?","+d:")");
}