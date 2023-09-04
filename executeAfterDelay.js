const printHello = () => {
    console.log('Hello!');
}

const executeAfterDelay = (seconds, fn) => {
    setTimeout(fn, (seconds * 1000));
    return;
}

executeAfterDelay(5, printHello);