const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
];

const generateMessage = (person) => {
    return `Hi ${person.name}! ${person.discount}% off our best candies for you today!`;
}

const generateMessageList = (arr) => {
    return arr.map(generateMessage);
}

console.log(generateMessageList(namesAndDiscounts));