function handleRandom(count: number) {
    const randomNumber = Math.random();
    const message = `${count}: ${randomNumber}`;
    console.log(message);
}

// main
function start(callback) {
    var count;
    const timer = setInterval(() => {
        count++;
        if (count >= 5) clearInterval(timer);
        callback(count);
    }, 1000);
}

// run main
start(handleRandom);

// Unit Test
// handleRandom(1);
