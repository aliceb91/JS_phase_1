numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd'
]

const checkLength = (numStr) => {
    if (numStr.length <= 10) {
        return true;
    } else {
        return false;
    }
}

const filterLongNumbers = (arr) => {
    return arr.filter(checkLength)
}

console.log(filterLongNumbers(numbers))