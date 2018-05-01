//转化为摄氏度
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
//转化为华氏度
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export { toCelsius, toFahrenheit }