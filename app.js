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
const defaultBuildingsSelectEl = document.querySelector('#buildings-default');
const defaultWaterfrontSelectEl = document.querySelector('#waterfront-default');
const defaultParkSelectEl = document.querySelector('#park-default');

// Set initial state values
let buildingChanges = 0;
let waterfrontChanges = 0;
let parkChanges = 0;
const sloganArray = [];

// Set up event listeners 
buildingsDropdownEl.addEventListener('change', () => {
    // Disable -- select -- option from dropdown
    defaultBuildingsSelectEl.setAttribute('disabled', true);
    // Update counter state
    buildingChanges++;
    // Update image 
    buildingImgEl.src = `./assets/buildings-${buildingsDropdownEl.value}.jpeg`;
    // Display state changes
    changeStatsEl.textContent = displayStats(buildingChanges, waterfrontChanges, parkChanges);
});

waterfrontDropdownEl.addEventListener('change', () => {
    // Disable -- select -- option from dropdown
    defaultWaterfrontSelectEl.setAttribute('disabled', true);
    // Update counter state
    waterfrontChanges++;
    // Update image 
    waterfrontImgEl.src = `./assets/water-${waterfrontDropdownEl.value}.jpeg`;
    // Display state changes
    changeStatsEl.textContent = displayStats(buildingChanges, waterfrontChanges, parkChanges);
});

parkDropdownEl.addEventListener('change', () => {
    // Disable -- select -- option from dropdown
    defaultParkSelectEl.setAttribute('disabled', true);
    // Update counter state
    parkChanges++;
    // Update image 
    parkImgEl.src = `./assets/${parkDropdownEl.value}-park.jpeg`;
    // Display state changes
    changeStatsEl.textContent = displayStats(buildingChanges, waterfrontChanges, parkChanges);
});

addSloganButton.addEventListener('click', () => {
    sloganArray.push(sloganTextFieldEl.value);
    displaySlogan(sloganArray);
    // Reset value of input field
    sloganTextFieldEl.value = '';
});

function displaySlogan(sloganArray) {
    // Clear DOM
    clearSlogans();
    for (let slogan of sloganArray) {
        const h = document.createElement('h3');
        h.textContent = slogan;
        sloganDisplayEl.append(h);
    }
}

// Helper functions
function clearSlogans() {
    while (sloganDisplayEl.firstChild) {
        sloganDisplayEl.firstChild.remove();
    }
}


