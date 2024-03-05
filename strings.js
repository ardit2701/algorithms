// Remove Blanks
function removeBlanks(str) {
    let result = '';
    for (let char of str) {
        if (char !== ' ') {
            result += char;
        }
    }
    return result;
}

// Get Digits
function getDigits(str) {
    let result = '';
    for (let char of str) {
        if (!isNaN(Number(char))) {
            result += char;
        }
    }
    return Number(result);
}

// Acronyms
function acronym(str) {
    let words = str.split(' ');
    let result = '';
    for (let word of words) {
        if (word !== '') {
            result += word[0].toUpperCase();
        }
    }
    return result;
}

// Count Non-Spaces
function countNonSpaces(str) {
    let count = 0;
    for (let char of str) {
        if (char !== ' ') {
            count++;
        }
    }
    return count;
}

// Remove Shorter Strings
function removeShorterStrings(arr, value) {
    return arr.filter(str => str.length >= value);
}

// Testing the functions
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); // "PlayThatFunkyMusic"
console.log(getDigits("abc8c0d1ngd0j0!8")); // 801008
console.log(acronym(" there's no free lunch - gotta pay yer way. ")); // "TNFL-GPYW"
console.log(countNonSpaces("Honey pie, you are driving me crazy")); // 29
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
