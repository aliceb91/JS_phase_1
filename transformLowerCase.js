const lowerCaseMessage = (text) => {
    return text.toLowerCase();
}

const transform = (text, transformFunction) => {
    return transformFunction(text);
}

console.log(transform("WHY ARE YOU SHOUTING", lowerCaseMessage));