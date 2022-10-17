// Problem Solutions
function timeConversion(s) {
    // Write your code here
    // get the hours and convert it to int
    let hour = s.split(':')[0],
        minutes = s.split(':')[1],
        seconds = s.split(':')[2].slice(0, -2);
        
    // check if 12 AM convert to zero
    if (hour == 12 && s.includes('AM')) {
        return `00:${minutes}:${seconds}`;
    }
    // if any PM hour add 12 except 12
    if (hour != 12 && s.includes('PM')) {
        return `${Number(hour) + 12}:${minutes}:${seconds}`;
    }
    // if any AM hour leave it
    return `${hour}:${minutes}:${seconds}`;
}
