// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let x of str) {
        if (!charMap[x]) {
            charMap[x] = 1;
        } else {
            charMap[x]++;
        }
    };

    for (let y in charMap) {
        if (charMap[y] > max) {
            max = charMap[y];
            maxChar = y;
        }
    };
    return maxChar;
}

module.exports = maxChar;
