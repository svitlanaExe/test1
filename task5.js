// Create function to generate random colors in HEX format (e.g. #90d2d8, #7c0724, #0049ff)
// Your task is to generate random HEX color. HEX color is a 6-digit, 24 bit, hexidecimal number.

getRandomHexColor(); // #0f19ab
getRandomHexColor(); // #e99064
getRandomHexColor(); // #7c0724

function getRandomHexColor(arr) {
    //generating a random number
    let rand = Math.floor(Math.random()*1000000);
    //converting to the to 16-bit number and adding zeros if needed
    rand =  (Math.abs(rand).toString(16)).padStart(6, '0');
    return console.log('#'+rand);
}


// Math.floor, Math.random (try to generate 2^24 random number)
// Number.prototype.toString() (try to convert random number to 16-bit number)
// Array.map (iterate the original "arr" array )
// String.prototype.padStart (to add some zeros at the beginning of the string, e.g #f724 -> #00f724, #7d2d8 -> #07d2d8 )