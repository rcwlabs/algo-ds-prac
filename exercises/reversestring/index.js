// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}

module.exports = reverse;


// function reverse(str) {
//     return str.split('').reduce((rev, x) => x + rev, '');
// }



// function reverse(str) {
//     let revStr = '';

//     for (let x of str) {
//         revStr = x + revStr;
//     }
//     return revStr;
// }