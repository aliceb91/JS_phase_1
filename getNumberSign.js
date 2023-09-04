const getNumberSign = (num) => {
    if (num < 0) {
        return 'negative';
    } else if (num > 0) {
        return 'positive';
    } else if (num === 0) {
        return 'zero';
    }
}

module.exports = getNumberSign;