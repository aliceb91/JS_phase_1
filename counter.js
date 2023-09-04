let counter = 0

const increment = () => {
    counter += 1;
    console.log(counter);
    return;
}

setInterval(increment, 1000);