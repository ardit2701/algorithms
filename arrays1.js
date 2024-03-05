// Push Front
function pushFront(arr, val) {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = val;
    return arr;
}

// Pop Front
function popFront(arr) {
    const removed = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    console.log(removed + " returned, with [" + arr.join(',') + "] printed in the function");
    return removed;
}

// Insert At
function insertAt(arr, index, val) {
    for (let i = arr.length - 1; i >= index; i--) {
        arr[i + 1] = arr[i];
    }
    arr[index] = val;
    return arr;
}

// Remove At
function removeAt(arr, index) {
    const removed = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    console.log(removed + " returned, with [" + arr.join(',') + "] printed in the function");
    return removed;
}

// Swap Pairs
function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}

// Remove Duplicates
function removeDupes(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            unique.push(arr[i]);
        }
    }
    return unique;
}


console.log(pushFront([5,7,2,3], 8)); // [8,5,7,2,3]
console.log(popFront([0,5,10,15])); // 0 returned, with [5,10,15] printed in the function
console.log(insertAt([100,200,5], 2, 311)); // [100,200,311,5]
console.log(removeAt([1000,3,204,77], 1)); // 3 returned, with [1000,204,77] printed in the function
console.log(swapPairs([1,2,3,4])); // [2,1,4,3]
console.log(removeDupes([-2,-2,3.14,5,5,10])); // [-2,3.14,5,10]
