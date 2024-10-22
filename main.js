/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)
    return round(value, d)

}

// Calculate the delta
function delta(a, b) {
    return a - b
}
// Calculate the slope using the delta function
function slope(x1, y1, x2, y2) {

    let delta_x = delta(x2, x1);

    let delta_y = delta(y2, y1);

    return delta_y/delta_x;
}

// Calculate the average of 2 numbers
function average(n1, n2) {

    return (n1 + n2)/2
}

// Calculate the length of a line segment

function length(x1, y1, x2, y2) {

    let delta_x = delta(x2, x1);

    let delta_y = delta(y2, y1);

    return Math.sqrt((delta_x**2) + (delta_y**2))
}



// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}


