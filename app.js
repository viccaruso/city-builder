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
    // Update state
    buildingChanges++;

    console.log(buildingsDropdownEl.value);

    // Reset DOM and display state changes
    clearDOM();
    changeStatsEl.textContent = displayStats(buildingChanges, waterfrontChanges, parkChanges);
});

waterfrontDropdownEl.addEventListener('change', () => {
    waterfrontChanges++;
    console.log('changed');
});

parkDropdownEl.addEventListener('change', () => {
    parkChanges++;
    console.log('changed');
});

addSloganButton.addEventListener('click', () => {
    sloganArray.push(sloganTextFieldEl.value);
    sloganTextFieldEl.value = ''; 
    clearDOM();
    displaySlogan(sloganArray);
});

// Helper functions
function clearDOM() {
    changeStatsEl.textContent = '';
    sloganDisplayEl.childNodes.remove;
}

function displaySlogan(array) {
    console.log('displaying slogan');
    console.log(array);
}

