function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}

function celciusToFahrenheit(celcius){
    return (celcius * 9/5) + 32;
} 

// module.exports = generateRandomNumber; // by this way we can export the function

module.exports = {
    generateRandomNumber,
    celciusToFahrenheit
}