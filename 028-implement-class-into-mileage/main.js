import {renderTable} from "./render.js";
import { getTripData, saveTripData } from "./storage.js";
import { isFormValid, calculateAvg, trackMPGandCost } from "./handleinput.js";
import { Trip } from "./trip.js";

/* Global const for updating DOM elements by their id*/

const FORM = document.getElementById('form-input');
const ERR = document.getElementById('err');
const AVG_OUTPUT = document.getElementById('output-avg');



/* MY_DATA is global array that will be updated by the user input with objects from form input values 
and calculate data */

const MY_DATA = getTripData()

renderTable(MY_DATA)


/* Eventlisteners for form submit button, checks validation and if valid saves input data and calculated 
data as an object into global array named MY_DATA */

FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    const miles = parseFloat(e.target.miles.value);
    const gallons = parseFloat(e.target.gallons.value);
    const price = parseFloat(e.target.price.value);
    const isValid = isFormValid(miles, gallons, price);
    if (isValid) {
        ERR.textContent = '';
        AVG_OUTPUT.textContent = '';
        const trip = new Trip(miles, gallons, price);
        MY_DATA.push(trip);
        saveTripData(MY_DATA)
        renderTable(MY_DATA, FORM);
    }
    FORM.reset();
});
