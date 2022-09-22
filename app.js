function position(letter) {
    // find ascii num val;
    let asciiNum = letter.charCodeAt(0);
    // ..then minus 96 to find number (ascii 'a' starts at 97)
    return "Position of alphabet: " + (asciiNum - 96);
}

console.log(position("a")); // "Position of alphabet: 1"
console.log(position("z")); // "Position of alphabet: 26"
console.log(position("e")); // "Position of alphabet: 5"