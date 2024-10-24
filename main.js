/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
// document.getElementById("zeros").addEventListener("click", zeros);
// document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("rect_prism_volume").addEventListener("click", rect_prism_volume);
document.getElementById("rect_prism_area").addEventListener("click", rect_prism_area);
document.getElementById("sphere_volume_button").addEventListener("click", sphere_volume);
document.getElementById("sphere_area_button").addEventListener("click", sphere_area);
document.getElementById("slope_button").addEventListener("click", slope_user);
document.getElementById("length_line_button").addEventListener("click", length_user);
document.getElementById("find_zeros_button").addEventListener("click", zeros);
// document.getElementById("find_vertex_button").addEventListener("click", vertex;
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

// Calculate volume of a rectangular prism
function rect_prism_volume() {

    let length = Number(document.getElementById("length").value);
    let height = Number(document.getElementById("height").value);
    let width = Number(document.getElementById("width").value);

    let volume = round_user(length * width * height);

    document.getElementById("volume").textContent = `${volume} units^3`;
}

// Calculate suface area of a sphere
function rect_prism_area() {

    let l = Number(document.getElementById("length").value);
    let h = Number(document.getElementById("height").value);
    let w = Number(document.getElementById("width").value);

    let area = round_user( 2 * (w * l + h * l +h * w));

    document.getElementById("area").textContent = `${area} units^2`;
}

// Calculate volume of a sphere
function sphere_volume() {

    let r = Number(document.getElementById("radius").value);

    let volume = round_user(4/3 * Math.PI * r ** 3);

    document.getElementById("sphere_volume").textContent = `${volume} units^3`;
}

// Calculate the surface area of a sphere
function sphere_area() {
    let r = Number(document.getElementById("radius").value);

    let area = round_user(4 * Math.PI * r **2)

    document.getElementById("sphere_area").textContent = `${area} units^3`;
}

// Calculate the slope of a line from the input of the user
function slope_user() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let user_slope = round_user(slope(x1, y1, x2, y2))

    document.getElementById("slope").textContent = `${user_slope}`
}
// Calculate the length of a line segment from the input of the user
function length_user() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let user_length = round_user(length(x1, y1, x2, y2))

    document.getElementById("length_line").textContent = `${user_length}`
}
// Calculate the length of a line segment from the input of the user
function midpoint_user() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);

    let x_avg = round_user(average(x1, x2))
    let y_avg = round_user(average(y1, y2))

    document.getElementById("midpoint").textContent = `${x_avg}, ${y_avg}`
}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

    let y = a * (x) **2 + (b * x) + c

    return y
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);


    let sqrt_value = Math.sqrt((b ** 2) - 4 * a * c)
     
            let first_zero = round_user((-b + sqrt_value) / (2 *a))

            let second_zero = round_user((-b - sqrt_value) / (2 * a))

            document.getElementById("zeros_answer").textContent = `the zeros are ${first_zero} and ${second_zero}`

    return zeros
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}


