// Import functions from utils.js 
import { displayStats } from './utils.js';

// Grab DOM elements and store in variable
const buildingImgEl = document.querySelector('#buildings-image');
const waterfrontImgEl = document.querySelector('#waterfront-image');
const parkImgEl = document.querySelector('#park-image');
const buildingsDropdownEl = document.querySelector('#buildings-dropdown');
const waterfrontDropdownEl = document.querySelector('#waterfront-dropdown');
const parkDropdownEl = document.querySelector('#park-dropdown');
const sloganTextFieldEl = document.querySelector('#slogan-field');
const addSloganButton = document.querySelector('#slogan-add-button');
const changeStatsEl = document.querySelector('#change-stats');
const sloganDisplayEl = document.querySelector('#slogan-display');

// Set initial state values
let buildingChanges = 0;
let waterfrontChanges = 0;
let parkChanges = 0;
const sloganArray = [];

// Set up event listeners 
buildingsDropdownEl.addEventListener('change', () => {
    // Update counter state
    buildingChanges++;
    // Update image 
    buildingImgEl.src = `./assets/buildings-${buildingsDropdownEl.value}.jpeg`;
    // Display state changes
    changeStatsEl.textContent = displayStats(buildingChanges, waterfrontChanges, parkChanges);
});

waterfrontDropdownEl.addEventListener('change', () => {
    // Update counter state
    waterfrontChanges++;
    // Update image 
    waterfrontImgEl.src = `./assets/water-${waterfrontDropdownEl.value}.jpeg`;
    // Display state changes
    changeStatsEl.textContent = displayStats(buildingChanges, waterfrontChanges, parkChanges);
});

parkDropdownEl.addEventListener('change', () => {
    // Update counter state
    parkChanges++;
    // Update image 
    parkImgEl.src = `./assets/${parkDropdownEl.value}-park.jpeg`;
    // Display state changes
    changeStatsEl.textContent = displayStats(buildingChanges, waterfrontChanges, parkChanges);
});

addSloganButton.addEventListener('click', () => {
    console.log(sloganTextFieldEl.value);
    sloganArray.push(sloganTextFieldEl.value);
    console.log(sloganArray);
    displaySlogan(sloganArray);
});

function displaySlogan(sloganArray) {
    clearSlogans();
    for (let slogan of sloganArray) {
        const h = document.createElement('h3');
        h.textContent = slogan;
        sloganDisplayEl.append(h);
    }
}

// Helper functions
function clearSlogans() {
    
}


