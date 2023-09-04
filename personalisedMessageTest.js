const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessage = (name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
}

const generateMessageList = (arr) => {
    return arr.map(generateMessage);
}

console.log(generateMessageList(names));